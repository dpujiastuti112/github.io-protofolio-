 // Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        const body = document.body;
        
        // Check for saved theme preference or use system preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            body.classList.add('dark');
        } else {
            html.classList.remove('dark');
            body.classList.remove('dark');
        }
        
        // Toggle theme
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            body.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
        
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Language toggle
        const languageToggle = document.getElementById('language-toggle');
        let currentLang = 'id'; // Default language
        
        // Function to update language
        function updateLanguage(lang) {
            const elements = document.querySelectorAll('[data-lang-id]');
            elements.forEach(el => {
                if (lang === 'id') {
                    el.textContent = el.getAttribute('data-lang-id');
                } else {
                    el.textContent = el.getAttribute('data-lang-en');
                }
            });
            
            // Update button text
            languageToggle.textContent = lang.toUpperCase();
            
            // Save preference
            localStorage.setItem('language', lang);
        }
        
        // Check for saved language preference
        if (localStorage.getItem('language') === 'en') {
            currentLang = 'en';
            updateLanguage('en');
        }
        
        // Toggle language
        languageToggle.addEventListener('click', () => {
            currentLang = currentLang === 'id' ? 'en' : 'id';
            updateLanguage(currentLang);
        });
        
        // Form submissions
        const reviewForm = document.getElementById('review-form');
        const contactForm = document.getElementById('contact-form');
        
        // Photo upload preview
        const photoUpload = document.getElementById('photo-upload');
        const photoPreview = photoUpload.parentElement.previousElementSibling;
        
        photoUpload.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                const reader = new FileReader();
                
                reader.onload = (e) => {
                    // Clear the preview div
                    while (photoPreview.firstChild) {
                        photoPreview.removeChild(photoPreview.firstChild);
                    }
                    
                    // Create and add the image
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.classList.add('w-full', 'h-full', 'object-cover');
                    photoPreview.appendChild(img);
                };
                
                reader.readAsDataURL(file);
            }
        });
        
        // Review form submission
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const review = document.getElementById('review').value;
            const rating = document.querySelector('input[name="rating"]:checked').value;
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert
            alert(`Thank you for your ${rating}-star review, ${name}!`);
            
            // Reset form
            reviewForm.reset();
            
            // Reset photo preview
            while (photoPreview.firstChild) {
                photoPreview.removeChild(photoPreview.firstChild);
            }
            photoPreview.innerHTML = '<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>';
        });
        
        // Contact form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Star rating hover effect
        const starLabels = document.querySelectorAll('.star-rating label');
        
        starLabels.forEach((label, index) => {
            label.addEventListener('mouseover', () => {
                for (let i = 0; i <= index; i++) {
                    starLabels[i].style.color = '#ffd700';
                }
            });
            
            label.addEventListener('mouseout', () => {
                starLabels.forEach(label => {
                    if (!label.previousElementSibling.checked) {
                        label.style.color = '';
                    }
                });
            });
        });
        
        // Portfolio slideshow functionality
        function initPortfolioSlideshow() {
            const slideshows = document.querySelectorAll('.portfolio-slideshow');
            
            slideshows.forEach(slideshow => {
                const slides = slideshow.querySelectorAll('.portfolio-slide');
                let currentSlide = 0;
                
                function showNextSlide() {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }
                
                // Auto-advance slides every 3 seconds
                setInterval(showNextSlide, 3000);
            });
        }
        
        // Initialize slideshow when page loads
        initPortfolioSlideshow();
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95c45d91722f7d69',t:'MTc1MjAyNzg3MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
