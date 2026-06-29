const portfolio = window.portfolioData;

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => (b.sortDate || "").localeCompare(a.sortDate || ""));
}

function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    if (a.sortDate || b.sortDate) {
      return (b.sortDate || "").localeCompare(a.sortDate || "");
    }

    return (a.order || 0) - (b.order || 0);
  });
}

function renderTags(tags) {
  if (!tags || tags.length === 0) {
    return null;
  }

  const tagList = createElement("div", "tag-list");

  tags.forEach((tag) => {
    tagList.appendChild(createElement("span", "tag", tag));
  });

  return tagList;
}

function renderContacts() {
  const container = document.getElementById("contactLinks");
  container.textContent = "";

  portfolio.profile.contacts.forEach((contact) => {
    if (contact.href) {
      const link = createElement("a", "contact-link", contact.label);
      link.href = contact.href;

      if (contact.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }

      if (contact.download) {
        link.setAttribute("download", "");
      }

      container.appendChild(link);
      return;
    }

    const placeholder = createElement("span", "contact-link is-disabled", contact.label);
    placeholder.setAttribute("aria-disabled", "true");
    container.appendChild(placeholder);
  });
}

function renderAbout() {
  const nameElement = document.getElementById("profileName");
  const aboutElement = document.getElementById("aboutText");
  const photo = document.getElementById("profilePhoto");
  const placeholder = document.getElementById("profilePlaceholder");

  nameElement.textContent = portfolio.profile.name;
  document.title = portfolio.profile.name;
  aboutElement.textContent = portfolio.about;

  photo.alt = `${portfolio.profile.name} profile photo`;
  photo.src = portfolio.profile.photo;
  placeholder.textContent = portfolio.profile.initials;

  photo.addEventListener("load", () => {
    photo.hidden = false;
    placeholder.hidden = true;
  });

  photo.addEventListener("error", () => {
    photo.hidden = true;
    placeholder.hidden = false;
  });
}

function formatMonthYear(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  });
}

function setLastUpdatedText(element, date) {
  element.textContent = `Updated ${formatMonthYear(date)}`;
}

function getDocumentModifiedDate() {
  const modifiedDate = new Date(document.lastModified);
  return Number.isNaN(modifiedDate.getTime()) ? new Date() : modifiedDate;
}

async function renderLastUpdated() {
  const updatedElement = document.getElementById("lastUpdated");

  if (!updatedElement) {
    return;
  }

  setLastUpdatedText(updatedElement, getDocumentModifiedDate());

  if (!portfolio.profile.repository) {
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${portfolio.profile.repository}/commits?per_page=1`, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    });

    if (!response.ok) {
      return;
    }

    const commits = await response.json();
    const latestCommit = commits[0];
    const commitDateText = latestCommit?.commit?.committer?.date || latestCommit?.commit?.author?.date;
    const commitDate = new Date(commitDateText);

    if (!Number.isNaN(commitDate.getTime())) {
      setLastUpdatedText(updatedElement, commitDate);
    }
  } catch (error) {
    // Keep the document modified date when the GitHub API is unavailable.
  }
}

function renderResumeEntries(items, containerId, titleKey) {
  const container = document.getElementById(containerId);
  container.textContent = "";

  sortByDateDesc(items).forEach((item) => {
    const article = createElement("article", "resume-entry");
    const top = createElement("div", "entry-top");
    const title = createElement("h3", "entry-title", item[titleKey]);
    const date = createElement("div", "entry-date", item.date);

    top.append(title, date);
    article.appendChild(top);

    if (item.organization) {
      article.appendChild(createElement("p", "entry-org", item.organization));
    }

    if (item.details) {
      item.details.forEach((detail) => {
        article.appendChild(createElement("p", "entry-detail", detail));
      });
    }

    if (item.bullets && item.bullets.length > 0) {
      const list = createElement("ul", "entry-bullets");
      item.bullets.forEach((bullet) => {
        list.appendChild(createElement("li", "", bullet));
      });
      article.appendChild(list);
    }

    const tags = renderTags(item.tags);
    if (tags) {
      article.appendChild(tags);
    }

    container.appendChild(article);
  });
}

function renderSkills() {
  const container = document.getElementById("skillsList");
  container.textContent = "";

  portfolio.skills.forEach((skillGroup) => {
    const article = createElement("article", "skill-group");
    article.appendChild(createElement("h3", "", skillGroup.group));

    const tags = renderTags(skillGroup.items);
    if (tags) {
      article.appendChild(tags);
    }

    container.appendChild(article);
  });
}

function renderProjects() {
  const container = document.getElementById("projectsList");
  container.textContent = "";

  sortProjects(portfolio.projects).forEach((project) => {
    const article = createElement("article", "project-card");
    const heading = createElement("div", "project-heading");
    const title = createElement("h3", "project-title");

    if (project.github) {
      const titleLink = createElement("a", "", project.name);
      titleLink.href = project.github;
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";
      title.appendChild(titleLink);
    } else {
      title.textContent = project.name;
    }

    heading.appendChild(title);

    if (project.status) {
      heading.appendChild(createElement("span", "status-badge", project.status));
    }

    article.appendChild(heading);
    article.appendChild(createElement("p", "project-description", project.shortDescription));

    if (project.details) {
      article.appendChild(createElement("p", "project-detail", project.details));
    }

    const tags = renderTags(project.topics);
    if (tags) {
      article.appendChild(tags);
    }

    const actions = createElement("div", "project-actions");
    if (project.github) {
      const repoLink = createElement("a", "repo-button", "GitHub Repository");
      repoLink.href = project.github;
      repoLink.target = "_blank";
      repoLink.rel = "noopener noreferrer";
      actions.appendChild(repoLink);
    } else {
      const unavailable = createElement("span", "repo-unavailable", project.repositoryLabel || "Repository unavailable");
      unavailable.setAttribute("aria-disabled", "true");
      actions.appendChild(unavailable);
    }

    article.appendChild(actions);
    container.appendChild(article);
  });
}

function setupScreenSwitcher() {
  const buttons = [...document.querySelectorAll("[data-screen-target]")];
  const screens = {
    profile: document.getElementById("profileScreen"),
    projects: document.getElementById("projectsScreen")
  };

  function showScreen(screenName) {
    buttons.forEach((button) => {
      const isActive = button.dataset.screenTarget === screenName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    Object.entries(screens).forEach(([name, screen]) => {
      const isActive = name === screenName;
      screen.hidden = !isActive;
      screen.setAttribute("aria-hidden", String(!isActive));
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showScreen(button.dataset.screenTarget);
    });
  });

  showScreen("profile");
}

function initPortfolio() {
  renderContacts();
  renderAbout();
  renderLastUpdated();
  renderResumeEntries(portfolio.experiences, "experienceList", "role");
  renderResumeEntries(portfolio.education, "educationList", "title");
  renderSkills();
  renderResumeEntries(portfolio.leadership, "leadershipList", "role");
  renderProjects();
  setupScreenSwitcher();
}

document.addEventListener("DOMContentLoaded", initPortfolio);
