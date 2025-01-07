document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating input');
    const form = document.getElementById('feedback-form');
    const submitButton = document.getElementById('submit-feedback');
    
    ratings.forEach(rating => {
        rating.addEventListener('change', function() {
            const selectedStars = this.value;
            const parentRating = this.closest('.rating');
            
            parentRating.querySelectorAll('label').forEach((label, index) => {
                if (index < selectedStars) {
                    label.textContent = '★'; 
                } else {
                    label.textContent = '☆'; 
                }
            });
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        
        const ratingSections = document.querySelectorAll('.rating');
        ratingSections.forEach((section) => {
            if (!section.querySelector('input:checked')) {
                valid = false;
            }
        });
        
        if (!valid) {
            alert('يرجى تقييم جميع الأقسام قبل إرسال التقييم!');
            return;
        }

        const feedbackData = {
            overall: document.querySelector('input[name="overall-rating"]:checked').value,
            food: document.querySelector('input[name="food-rating"]:checked').value,
            service: document.querySelector('input[name="service-rating"]:checked').value,
            ambience: document.querySelector('input[name="ambience-rating"]:checked').value,
            additionalFeedback: document.querySelector('textarea[name="additional-feedback"]').value
        };
        
        console.log('تم إرسال التقييم:', feedbackData);
        alert('تم إرسال التقييم بنجاح!');
        
        form.style.display = 'none'; 
        
    });
});
