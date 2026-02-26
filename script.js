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
