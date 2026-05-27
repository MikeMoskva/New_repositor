function toggleTheme() {
            const body = document.body;
            const btn = document.querySelector('.theme-toggle');
            
            if (body.classList.contains('theme-dark')) {
                body.classList.remove('theme-dark');
                body.classList.add('theme-light');
				btn.innerHTML = 'Тёмная тема';
            } else {
                body.classList.remove('theme-light');
                body.classList.add('theme-dark');
				btn.innerHTML = 'Светлая тема';
            }
        }