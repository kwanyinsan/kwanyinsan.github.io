// Edit this file to update the portfolio content.
window.portfolioData = {
  profile: {
    name: "YIN SAN GARY KWAN",
    initials: "GK",
    email: "kwanyinsan@gmail.com",
    phone: "69952456",
    repository: "kwanyinsan/kwanyinsan.github.io",
    photo: "assets/profile.jpg",
    cv: "assets/CV.pdf",
    contacts: [
      {
        label: "Email",
        href: "mailto:kwanyinsan@gmail.com"
      },
      {
        label: "GitHub",
        href: "https://github.com/kwanyinsan",
        external: true
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yin-san-kwan-4780b2172/",
        external: true
      },
      {
        label: "CV",
        href: "assets/CV.pdf",
        download: true
      }
    ]
  },

  about:
    "I am an engineering graduate in electronic engineering with experience across artificial intelligence, machine learning, computer vision, speech technology, data processing, and software development. My work has involved real-world image, video, text, and speech data, including preparing datasets, improving data quality, supporting model training workflows, and turning AI outputs into usable application features. Through internships, university project work, research assistant experience, and freelance software projects, I have built practical pipelines for detection, tracking, analysis, media processing, and speech-related workflows. I enjoy working close to both the data and the software around it, with an emphasis on clear implementation, careful validation, and solutions that can be understood, maintained, and improved over time.",

  experiences: [
    {
      role: "Freelance Software Engineer",
      organization: "Self-employed",
      date: "Jan 2026 - Present",
      sortDate: "9999-12",
      bullets: [
        "Developed a computer vision auto-framing pipeline for sports highlight videos with object detection, player tracking, movement analysis, and automated cropping for stable social-media-ready clip generation.",
        "Built a Player Album system for sports highlight videos with segmentation, multi-object tracking, person re-identification embeddings, clustering, conflict validation, and identity validation for recurring player grouping across clips.",
        "Built a Text Insight RAG system for local text understanding, converting cleaned document chunks into LangChain documents for semantic search, sentiment analysis, HuggingFace embedding retrieval, lexical rescue, reranking, and Ollama-based English answers."
      ],
      tags: ["Computer Vision", "Video Processing", "RAG", "Data Pipelines"]
    },
    {
      role: "Research Assistant",
      organization: "Department of Electronic Engineering, The Chinese University of Hong Kong",
      date: "Jun 2025 - Dec 2025",
      sortDate: "2025-12",
      bullets: [
        "Assisted in daily research activities at the Digital Signal Processing and Speech Technology Laboratory.",
        "Conducted research on Cantonese speech datasets for evaluating and improving text-to-speech AI models.",
        "Performed data preprocessing and data cleaning on Cantonese speech audio and corresponding transcripts.",
        "Trained speaker-specific text-to-speech models based on a guided diffusion model architecture.",
        "Enhanced clients' pre-recorded audio to improve the performance of their text-to-speech models.",
        "Improved the understandability, portability, and user-friendliness of the model training and inferencing codebase."
      ],
      tags: ["Speech AI", "Data Cleaning", "Model Training"]
    },
    {
      role: "Software Engineer Intern",
      organization: "HairCoSys Limited",
      date: "Jul 2024 - Aug 2024",
      sortDate: "2024-08",
      bullets: [
        "Applied data preprocessing techniques to raw hair follicle images to enhance model performance.",
        "Trained object detection models based on the YOLO framework and object classification models using the MMClassification framework to identify and differentiate various hair follicle diseases.",
        "Developed and integrated prediction and post-processing functionalities into the AI-driven haircare application."
      ],
      tags: ["Object Detection", "Object Classification", "AI Application"]
    },
    {
      role: "Software Engineer Intern",
      organization: "Intelligent Design Technology",
      date: "Jun 2023 - Aug 2023",
      sortDate: "2023-08",
      bullets: [
        "Utilized data preprocessing techniques on raw thermal images to improve model performance.",
        "Developed and trained an object detection model based on the YOLO framework for identifying mice using thermal camera data."
      ],
      tags: ["Thermal Imaging", "Object Detection", "Model Training"]
    }
  ],

  education: [
    {
      title: "Bachelor of Engineering in Electronic Engineering",
      organization: "The Chinese University of Hong Kong (CUHK)",
      date: "Aug 2020 - Jul 2025",
      sortDate: "2025-07",
      details: [
        "Minor in Computer Science, Information Engineering, Web and Cloud Computing",
        "Thesis title of Final Year Project: A Deep Learning Re-Implementation for Monocular 3D Object Detection with Complementary Depths in MMDetection"
      ],
      bullets: [
        "Re-implemented the MonoCD framework in MMDetection to improve monocular 3D object detection using complementary depth estimation.",
        "Designed a modular 3D reconstruction pipeline that fuses 2D object detections with learned depth maps to estimate 3D bounding boxes on the KITTI dataset."
      ]
    },
    {
      title: "Associate of Engineering",
      organization: "The University of Hong Kong - School of Professional and Continuing Education (HKU SPACE) Community College",
      date: "Aug 2018 - Jul 2020",
      sortDate: "2020-07",
      details: [
        "Computer Science Theme, Principal's Honours List in year 2019 - 2020"
      ],
      bullets: []
    }
  ],

  skills: [
    {
      group: "Artificial Intelligence & Machine Learning",
      items: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Pattern Recognition",
        "Model Training",
        "Model Evaluation",
        "Model Optimisation",
        "Error Analysis"
      ]
    },
    {
      group: "Computer Vision & Video Processing",
      items: [
        "Computer Vision",
        "Object Detection",
        "Object Classification",
        "Object Segmentation",
        "Player Tracking",
        "Ball Tracking",
        "Person Re-Identification",
        "Video Processing",
        "Auto-Framing",
        "Crop Generation",
        "Camera Calibration",
        "Monocular 3D Object Detection",
        "Depth Estimation"
      ]
    },
    {
      group: "Natural Language Processing, RAG & Speech AI",
      items: [
        "Natural Language Processing",
        "Retrieval-Augmented Generation",
        "Semantic Search",
        "Sentiment Analysis",
        "Text Chunking",
        "LangChain Retrieval",
        "HuggingFace Embeddings",
        "Sentence Transformers",
        "Ollama-Based Local LLM Inference",
        "Text-to-Speech",
        "Speech Processing",
        "Audio Processing"
      ]
    },
    {
      group: "Data Processing & Retrieval",
      items: [
        "Data Analytics",
        "Data Analysis",
        "Data Visualization",
        "Data Preprocessing",
        "Data Cleaning",
        "Dataset Organisation",
        "Vector Retrieval",
        "Cosine Similarity",
        "Embedding-Based Clustering",
        "Agglomerative Clustering",
        "Lexical Rescue",
        "Reranking"
      ]
    },
    {
      group: "Programming Languages",
      items: ["Python", "SQL", "C++", "C", "Java", "JavaScript", "Dart"]
    },
    {
      group: "Frameworks & Libraries",
      items: [
        "PyTorch",
        "OpenCV",
        "MMClassification",
        "MMDetection",
        "YOLO",
        "YOLOE",
        "Ultralytics",
        "Torchreid",
        "OSNet-AIN",
        "LangChain",
        "Hugging Face",
        "OpenGL",
        "Flutter"
      ]
    },
    {
      group: "Software & Application Development",
      items: [
        "Software Development",
        "Software Design",
        "Data Structures",
        "Web Development",
        "Web Application Development",
        "Mobile Application Development",
        "Command-Line Application Development",
        "Debugging",
        "Testing",
        "Documentation"
      ]
    },
    {
      group: "Tools & Platforms",
      items: [
        "Git",
        "GitHub",
        "Linux",
        "Conda",
        "FFmpeg",
        "CUDA",
        "JSON",
        "Markdown",
        "KITTI Dataset",
        "COCO Annotation Format"
      ]
    },
    {
      group: "Robotics",
      items: ["Robotics", "Robot Programming"]
    },
    {
      group: "Project & Management Skills",
      items: [
        "Project Management",
        "Project Planning",
        "Modular Pipeline Design",
        "Technical Documentation"
      ]
    }
  ],

  leadership: [
    {
      role: "Orientation Camp Organizer",
      organization: "United College, CUHK",
      date: "May 2021 - Sep 2024",
      sortDate: "2024-09",
      bullets: [
        "Drafted, scheduled, and organized orientation camps for freshmen of the United College, CUHK."
      ]
    },
    {
      role: "External Vice President",
      organization: "Electronic Engineering Society, CUHK",
      date: "Feb 2022 - Jan 2023",
      sortDate: "2023-01",
      bullets: [
        "Assisted the President in all duties related to external affairs.",
        "Coordinated communication with other student organizations."
      ]
    }
  ],

  projects: [
    {
      name: "Text Insight RAG",
      shortDescription: "A local command-line project for reading, searching, and analyzing private text files.",
      details: "The project cleans and chunks local text files, builds a local semantic search index, retrieves relevant passages, generates English answers and analysis reports, and saves query or analysis outputs.",
      topics: ["Local Text Analysis", "Semantic Search", "Sentiment Analysis", "Text Chunking", "LangChain", "Hugging Face", "Ollama"],
      github: "https://github.com/kwanyinsan/text-insight-rag",
      order: 1
    },
    {
      name: "Player Album",
      shortDescription: "A player and person album generation pipeline for sports highlight videos.",
      details: "The pipeline creates local player tracks, saves player crops, extracts person re-identification embeddings, clusters matching identities across videos, and exports player album folders, JSON indexes, debug videos, and verification galleries.",
      topics: ["Computer Vision", "Video Processing", "Segmentation", "Multi-Object Tracking", "Person Re-Identification", "Clustering", "YOLOE", "Torchreid"],
      github: "https://github.com/kwanyinsan/player-album",
      order: 2
    },
    {
      name: "Sports Auto-Framing Pipeline",
      shortDescription: "A sports video auto-framing project for pickleball highlight clips.",
      details: "The pipeline combines court detection, object detection, ball tracking, player identity processing, crop-path generation, and video rendering to create fixed landscape outputs and vertical reels-style outputs from raw court footage.",
      topics: ["Computer Vision", "Video Processing", "Object Detection", "Ball Tracking", "Auto-Framing", "Crop Generation", "OpenCV", "YOLO", "FFmpeg"],
      github: "https://github.com/kwanyinsan/sports-auto-framing",
      order: 3
    },
    {
      name: "MMDetectionMonoCD",
      shortDescription: "A final year project prototype for monocular 3D object detection with complementary depth cues.",
      details: "The project integrates MonoCD depth and 3D cues with a self-trained MMDetection 2D car detector, then combines 2D boxes, depth maps, and KITTI camera calibration through a late-fusion post-processing pipeline to estimate 3D boxes.",
      topics: ["Monocular 3D Object Detection", "Depth Estimation", "2D Object Detection", "MMDetection", "MonoCD", "KITTI Dataset", "Camera Calibration"],
      github: "https://github.com/kwanyinsan/MMDetectionMonoCD",
      order: 4
    }
  ]
};
