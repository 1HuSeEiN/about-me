// --- شاشة التحميل (Preloader) ---
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 600); // Wait for fade out
            }, 1000); // Show for 1 second at least
        });

        // --- شريط تقدم التمرير (Scroll Progress) ---
        window.addEventListener('scroll', function() {
            const scrollProgress = document.getElementById('scroll-progress');
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight * 100}%`;
            scrollProgress.style.width = scroll;
        });

        // --- التبديل بين الوضع الليلي والنهاري (Theme Toggle) ---
        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;
        const icon = themeToggle.querySelector('i');

        // تحقق من الوضع المحفوظ مسبقاً
        const savedTheme = localStorage.getItem('theme') || 'dark';
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            let currentTheme = htmlElement.getAttribute('data-theme');
            let targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateThemeIcon(targetTheme);
            
            // تحديث لون جزيئات Particles.js حسب الوضع
            updateParticlesColor(targetTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'light') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }

        function updateParticlesColor(theme) {
            if (window.pJSDom && window.pJSDom.length > 0) {
                let color = theme === 'light' ? '#0056b3' : '#00c6ff';
                window.pJSDom[0].pJS.particles.color.value = color;
                window.pJSDom[0].pJS.particles.line_linked.color = color;
                window.pJSDom[0].pJS.fn.particlesRefresh();
            }
        }

        // دالة عرض إشعار النسخ (Toast)
        function copyText() {
            navigator.clipboard.writeText("h_.n");

            var toast = document.getElementById("toast");
            toast.className = "toast show";

            // إخفاء الإشعار بعد 3 ثوانٍ
            setTimeout(function () {
                toast.className = toast.className.replace("show", "");
            }, 3000);
        }

        // لتحديد العنصر النشط في شريط التنقل بناءً على القسم الظاهر
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 150) { // -150 offset for header
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
        });

        // تعيين active class للرئيسية عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', () => {
            const homeLink = document.querySelector('.nav-links a[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        });

        // تهيئة Particles.js
        particlesJS('particles-js',
            {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#00c6ff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#00c6ff",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 0.5
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }
        );

// تهيئة مكتبة AOS للأنيميشن
        AOS.init({
            once: true, // الأنيميشن يعمل مرة واحدة فقط عند النزول
        });

        // دوال زر العودة للأعلى
        let mybutton = document.getElementById("scrollTopBtn");

        // إظهار الزر عند النزول 300px
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // الصعود للأعلى بسلاسة عند الضغط على الزر
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // --- تأثير الكتابة الديناميكي (Dynamic Typewriter) ---
        let texts = ["محاسب مستقبلي", "مطور بوتات ديسكورد", "مبرمج Python"]; // سيتم تحديثها باللغة
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";
        let isDeleting = false;

        function typeWriter() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];

            if (isDeleting) {
                letter = currentText.slice(0, --index);
            } else {
                letter = currentText.slice(0, ++index);
            }

            document.getElementById("typewriter").textContent = letter;

            let typeSpeed = 100;
            if (isDeleting) {
                typeSpeed /= 2; // أسرع عند المسح
            }

            if (!isDeleting && letter.length === currentText.length) {
                typeSpeed = 2000; // الانتظار بعد اكتمال الكلمة
                isDeleting = true;
            } else if (isDeleting && letter.length === 0) {
                isDeleting = false;
                count++;
                typeSpeed = 500; // الانتظار قبل الكلمة الجديدة
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // تمت إزالة حدث DOMContentLoaded المكرر هنا لأنه نُقل للأسفل مع دالة اللغة

        // --- النوافذ التفصيلية للمشاريع (Project Modals) ---
        const modal = document.getElementById("projectModal");
        const modalImg = document.getElementById("modal-img");
        const modalTitle = document.getElementById("modal-title");
        const modalDesc = document.getElementById("modal-desc");
        const modalLink = document.getElementById("modal-link");

        function openModal(title, desc, imgSrc, link) {
            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modalImg.src = imgSrc;
            modalLink.href = link;
            
            modal.style.display = "flex";
            // القليل من التأخير لتفعيل الـ transition
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
            
            // منع التمرير في الصفحة الخلفية
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 400); // نفس مدة الـ transition
            
            // إعادة التمرير للصفحة
            document.body.style.overflow = "auto";
        }

        // إغلاق النافذة عند الضغط خارج المحتوى
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        // --- دعم تعدد اللغات (Multi-Language Support) ---
        const translations = {
            ar: {
                nav_home: "الرئيسية",
                nav_about: "عني",
                nav_portfolio: "أعمالي",
                nav_contact: "تواصل معي",
                hero_desc: "مرحباً! أنا حسين، 21 عاماً من العراق، لدي شغف بالأرقام والأكواد. أنا متخصص في البرمجة و محاسب مستقبلي.",
                hero_btn: "شاهد أعمالي",
                about_title: "من أنا؟",
                about_p1: "كطالب في كلية الإدارة والاقتصاد (قسم المحاسبة) ومبرمج بايثون بخبرة تزيد عن 5 سنوات، أتمتع بنظرة فريدة تجمع بين الدقة المالية والابتكار التقني. أسعى دائمًا لتطوير حلول برمجية ذكية تساعد في تبسيط العمليات المعقدة.",
                about_p2: "أنا أؤمن بالتعلم المستمر وأستمتع بمواكبة أحدث التقنيات. في أوقات فراغي، أستمتع بتطوير مشاريعي الخاصة والمساهمة في مجتمعات المصادر المفتوحة.",
                skills_title: "مهاراتي",
                skill_1: "حل المشكلات",
                skill_2: "الانتباه للتفاصيل",
                skill_3: "إدارة المشاريع المستقلة",
                skill_4: "القدرة على التكيف",
                skill_5: "التعلم السريع",
                portfolio_title: "أبرز أعمالي",
                portfolio_desc: "هنا مجموعة من المشاريع التي عملت عليها.",
                proj1_title: "بوت صناعة واجهة تقارير",
                proj1_desc: "إنشاء تقارير احترافية مجانًا وبدون إعلانات سريع، سهل، يدعم PDF والصور واكثر من 100 واجهة يوميا",
                proj1_modal_desc: "إنشاء تقارير احترافية مجانًا وبدون إعلانات. يتميز بالسرعة والسهولة، ويدعم استخراج التقارير بصيغتي PDF والصور. يمكنه إنشاء أكثر من 100 واجهة يومياً لتلبية احتياجاتك.",
                proj2_title: "اداة للانشاء التقارير والبحوث",
                proj2_desc: "برنامج خاص لانشاء التقارير والبحوث كاملة بأستخدام الذكاء الاصطناعي مع المصادر او بدون وبلغتين العربية والانكليزية",
                proj2_modal_desc: "برنامج احترافي متقدم لإنشاء التقارير والبحوث الأكاديمية كاملة باستخدام تقنيات الذكاء الاصطناعي. يوفر إمكانية إضافة المصادر الموثوقة أو الاستغناء عنها، ويدعم اللغتين العربية والإنجليزية لضمان تغطية شاملة لمختلف التخصصات.",
                proj3_title: "ADS Bot",
                proj3_desc: "بوت مخصص للنشر السيرفرات حول العالم بشكل مجاني وبدون اي اعلانات وسريع وسهل الاستخدام",
                proj3_modal_desc: "بوت ديسكورد قوي ومخصص لنشر سيرفرك والترويج له حول العالم. يتميز بأنه مجاني بالكامل، ولا يحتوي على أي إعلانات مزعجة. مصمم ليكون سريعاً وسهل الاستخدام لتكبير مجتمعك بفعالية.",
                proj4_title: "Youtube Downloader",
                proj4_desc: "برنامج لتحميل الفيديوهات من اليوتيوب بجودة عالية وسريع وبدون اعلانات ويدعم تحميل الصوت فقط او الفيديو كامل",
                proj4_modal_desc: "برنامج سطح مكتب سريع وفعال لتحميل مقاطع الفيديو من اليوتيوب بأعلى جودة ممكنة. واجهة خالية من الإعلانات تماماً. يدعم خيارات تحميل الفيديو بالكامل أو استخراج وتحميل الصوت (MP3) فقط بسهولة.",
                btn_bot_link: "رابط البوت",
                btn_details: "تفاصيل",
                btn_contact_insta: "تواصل انستا",
                btn_app_link: "رابط البرنامج",
                contact_title: "تواصل معي",
                contact_desc: "هل لديك مشروع أو فرصة عمل؟ أو ترغب فقط في مناقشة فكرة؟ يمكنك إيجادي على المنصات التالية.",
                btn_visit_project: "زيارة المشروع",
                footer_rights: "جميع الحقوق محفوظة",
                typewriter_texts: ["محاسب مستقبلي", "مطور بوتات ديسكورد", "مبرمج Python"],
                
                // ترجمات قسم السيرة الذاتية والشات بوت
                cv_title: "السيرة الذاتية",
                cv_desc: "ملخص لرحلتي التعليمية والمهنية في عالم الأرقام والبرمجة.",
                cv_edu_title: "التعليم",
                cv_edu_1: "كلية الإدارة والاقتصاد - محاسبة (جامعة النخبة)",
                cv_edu_1_date: "2024 - الحاضر",
                cv_edu_1_desc: "طالب جامعي في المرحلة الثانية، أدرس المحاسبة لدمج الدقة المالية مع خبرتي التقنية.",
                cv_exp_title: "الخبرات البرمجية",
                cv_exp_1: "مبرمج بايثون معتمد (Python Developer)",
                cv_exp_1_date: "2019 - الحاضر",
                cv_exp_1_desc: "حاصل على شهادتين في لغة بايثون، وخبرة تمتد لأكثر من 5 سنوات في تطوير البرمجيات، بوتات ديسكورد، وأدوات الأتمتة.",
                cv_exp_2: "مطور أدوات أتمتة",
                cv_exp_2_date: "2022 - الحاضر",
                cv_exp_2_desc: "إنشاء سكربتات وبرامج مكتبية (Desktop Apps) لأتمتة المهام اليومية باستخدام Tkinter.",
                cv_download_btn: "تحميل السيرة الذاتية",
                chat_section_title: "المساعد الذكي",
                chat_section_desc: "تحدث مع المساعد الذكي الخاص بي لمعرفة المزيد عن خدماتي وأسعاري.",
                chat_btn_text: "المساعد الذكي",
                chat_title: "HusseinBot",
                chat_welcome: "أهلاً بك! أنا المساعد الذكي لحسين. كيف يمكنني مساعدتك؟",
                chat_q1: "ما هي أسعارك لبرمجة البوتات؟",
                chat_q2: "ما هي الخدمات التي تقدمها؟",
                chat_q3: "كيف يمكنني التواصل معك للعمل؟",
                chat_a1: "الأسعار تعتمد على فكرة البوت والميزات المطلوبة. يمكنك التواصل معي عبر ديسكورد أو إنستغرام لمناقشة التفاصيل والحصول على تسعيرة دقيقة.",
                chat_a2: "أقدم خدمات برمجة بوتات ديسكورد مخصصة، برامج سطح مكتب (Desktop Apps) باستخدام بايثون، وأدوات أتمتة لتسهيل أعمالك، بالإضافة إلى الاستشارات البرمجية.",
                chat_a3: "أفضل طريقة للتواصل السريع هي عبر ديسكورد (h_.n)، أو إنستغرام، أو بالاتصال/واتساب على الرقم: 07817886273. روابط التواصل موجودة في أسفل الموقع."
            },
            en: {
                nav_home: "Home",
                nav_about: "About",
                nav_portfolio: "Portfolio",
                nav_contact: "Contact",
                hero_desc: "Hello! I'm Hussein, 21 years old from Iraq. I have a passion for numbers and code. I specialize in programming and I'm a future accountant.",
                hero_btn: "View My Work",
                about_title: "Who am I?",
                about_p1: "As a student at the College of Administration and Economics (Accounting) and a Python programmer with over 5 years of experience, I have a unique perspective combining financial precision with technical innovation.",
                about_p2: "I believe in continuous learning and enjoy keeping up with the latest technologies. In my free time, I enjoy developing my own projects and contributing to open-source communities.",
                skills_title: "My Skills",
                skill_1: "Problem Solving",
                skill_2: "Attention to Detail",
                skill_3: "Independent Project Management",
                skill_4: "Adaptability",
                skill_5: "Fast Learning",
                portfolio_title: "Featured Works",
                portfolio_desc: "Here is a collection of projects I have worked on.",
                proj1_title: "Report Interface Maker Bot",
                proj1_desc: "Create professional reports for free, without ads. Fast, easy, supports PDF and images, over 100 interfaces daily.",
                proj1_modal_desc: "Create professional reports for free, without ads. Fast and easy to use, supports exporting reports in PDF and Image formats. Can generate over 100 interfaces daily to meet your needs.",
                proj2_title: "AI Reports & Research Tool",
                proj2_desc: "A special program for creating complete reports and research using AI, with or without sources, in both Arabic and English.",
                proj2_modal_desc: "An advanced professional program for generating complete academic reports and research using AI technologies. It offers the ability to include reliable sources or omit them, and supports both Arabic and English languages.",
                proj3_title: "ADS Bot",
                proj3_desc: "A bot dedicated to publishing servers worldwide for free, without any ads, fast, and easy to use.",
                proj3_modal_desc: "A powerful Discord bot dedicated to publishing and promoting your server worldwide. It is completely free and contains no annoying ads. Designed to be fast and user-friendly to effectively grow your community.",
                proj4_title: "Youtube Downloader",
                proj4_desc: "A program to download high-quality videos from YouTube, fast, without ads, supports downloading audio only or full video.",
                proj4_modal_desc: "A fast and efficient desktop application to download videos from YouTube in the highest possible quality. Completely ad-free interface. Supports options to download full videos or extract audio (MP3) easily.",
                btn_bot_link: "Bot Link",
                btn_details: "Details",
                btn_contact_insta: "Contact on Insta",
                btn_app_link: "App Link",
                contact_title: "Contact Me",
                contact_desc: "Have a project or job opportunity? Or just want to discuss an idea? You can find me on the following platforms.",
                btn_visit_project: "Visit Project",
                footer_rights: "All Rights Reserved",
                typewriter_texts: ["Future Accountant", "Discord Bot Developer", "Python Programmer"],
                
                // CV & Chatbot Translations
                cv_title: "Resume / CV",
                cv_desc: "A summary of my educational and professional journey in numbers and code.",
                cv_edu_title: "Education",
                cv_edu_1: "Administration and Economics - Accounting (Al-Nukhba University)",
                cv_edu_1_date: "2024 - Present",
                cv_edu_1_desc: "Sophomore university student, studying accounting to combine financial precision with technical expertise.",
                cv_exp_title: "Programming Experience",
                cv_exp_1: "Certified Python Developer",
                cv_exp_1_date: "2019 - Present",
                cv_exp_1_desc: "Holding two certificates in Python, with over 5 years of experience developing software, Discord bots, and automation tools.",
                cv_exp_2: "Automation Tools Developer",
                cv_exp_2_date: "2022 - Present",
                cv_exp_2_desc: "Creating scripts and desktop apps to automate daily tasks using Tkinter.",
                cv_download_btn: "Download CV",
                chat_section_title: "Smart Assistant",
                chat_section_desc: "Chat with my smart assistant to learn more about my services and pricing.",
                chat_btn_text: "Smart Assistant",
                chat_title: "HusseinBot",
                chat_welcome: "Hello! I am Hussein's smart assistant. How can I help you?",
                chat_q1: "What are your prices for coding bots?",
                chat_q2: "What services do you offer?",
                chat_q3: "How can I contact you for work?",
                chat_a1: "Prices depend on the bot idea and required features. You can contact me via Discord or Instagram to discuss details and get an accurate quote.",
                chat_a2: "I offer custom Discord bot development, desktop applications using Python, and automation tools to simplify your work, as well as programming consultations.",
                chat_a3: "The best way for quick contact is via Discord (h_.n), Instagram, or by calling/WhatsApp at: 07817886273. Links are available at the bottom of the page."
            }
        };

        const langToggle = document.getElementById("lang-toggle");
        let currentLang = localStorage.getItem("lang") || "ar";

        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem("lang", lang);
            
            // تحديث اتجاه الصفحة
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            
            // تحديث نص الزر
            langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
            
            // تحديث النصوص
            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.getAttribute("data-i18n");
                if (translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            });
            
            // تحديث نصوص تأثير الكتابة
            texts = translations[lang].typewriter_texts;
            count = 0;
            index = 0;
            isDeleting = false;
        }

        langToggle.addEventListener("click", () => {
            let targetLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(targetLang);
        });

        // تشغيل اللغة المحفوظة عند التحميل
        document.addEventListener("DOMContentLoaded", function() {
            setLanguage(currentLang);
            setTimeout(typeWriter, 1500); // تأخير بسيط حتى تكتمل شاشة التحميل
        });

        // --- المساعد الذكي (Chatbot) ---
        function toggleChat() {
            const chatWindow = document.getElementById("chatbot-window");
            chatWindow.classList.toggle("chat-hidden");
        }

        function sendChatMessage(type, textKey) {
            const messagesContainer = document.getElementById("chat-messages");
            const lang = currentLang;
            
            // إضافة رسالة المستخدم
            const userMsgText = translations[lang][textKey];
            const userMsg = document.createElement("div");
            userMsg.className = "message user-message";
            userMsg.textContent = userMsgText;
            messagesContainer.appendChild(userMsg);
            
            // التمرير للأسفل
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // محاكاة تأخير الرد
            setTimeout(() => {
                let answerKey = '';
                if(type === 'price') answerKey = 'chat_a1';
                else if(type === 'services') answerKey = 'chat_a2';
                else if(type === 'contact') answerKey = 'chat_a3';

                const botMsgText = translations[lang][answerKey];
                const botMsg = document.createElement("div");
                botMsg.className = "message bot-message";
                botMsg.textContent = botMsgText;
                messagesContainer.appendChild(botMsg);
                
                // التمرير للأسفل
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
        }
