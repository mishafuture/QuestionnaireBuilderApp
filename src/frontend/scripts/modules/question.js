function question() {
    const addQuestion = document.querySelector("[data-addition-question]"),
        container = document.querySelector(".question-container");
    let questionIndex = 1;

    container.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("remove-question")) {
            target.parentElement.remove();
            numberQuestions();
        }
    })

    addQuestion.addEventListener("click", (e) => {
        add();
    })

    function numberQuestions() {
        const questionIndexes = document.querySelectorAll(".question-index");
        let index = 1;

        questionIndexes.forEach((element) => {
            element.innerHTML = `${index++}`;
        });
    }

    function labelIndent() {
        const labels = document.querySelectorAll(".question-item label");

        labels.forEach((label, i) => {
            if (i < 9) {
                label.classList.add("small-indent");
                label.classList.remove("medium-indent");
                label.classList.remove("big-indent");
            }
            else if (i < 99) {
                label.classList.remove("small-indent");
                label.classList.add("medium-indent");
                label.classList.remove("big-indent");
            }
            else {
                label.classList.remove("small-indent");
                label.classList.remove("medium-indent");
                label.classList.add("big-indent");
            }
        })
    }

    function add() {
        const newDivQuestion = document.createElement("div");
        newDivQuestion.classList.add("question");

        newDivQuestion.innerHTML = `
        <div class="question-row">
            <div class="question-item">
                <label for="question-name-${questionIndex}">Question</label>
                <div class="input-wrapper">
                    <span class="question-index">1.</span>
                    <input type="text" id="question-name-${questionIndex}">
                </div>
            </div>
    
            <div class="question-type">
                <label class="label-type" for="question-type-${questionIndex}">Type</label>
                <select name="question-type" id="question-type-${questionIndex}">
                    <option value="text">Text</option>
                    <option value="single-choice">Single choice</option>
                    <option value="multiple-choice">Multiple choice</option>
                </select>
            </div>
        </div>

    <button class="remove-question">Remove</button>`;

        questionIndex++;
        container.append(newDivQuestion);

        numberQuestions();
        labelIndent();
    }

}

export default question;