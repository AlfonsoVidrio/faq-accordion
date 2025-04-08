const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

// Initially open the first question and answer
questions[0].classList.add('open');
answers[0].classList.add('open');
questions[0].setAttribute('aria-expanded', 'true');

questions.forEach((question, i) => {
    question.addEventListener('click', () => {
        // Toggle the "open" class
        question.classList.toggle('open');
        answers[i].classList.toggle('open');

        // Toggle aria-expanded for accessibility
        const isExpanded = question.classList.contains('open');
        question.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
});
