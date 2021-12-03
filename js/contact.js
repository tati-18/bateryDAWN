/*import Stepper from 'bs-stepper'*/


// document.addEventListener('DOMContentLoaded', function () {
//     var stepper = new Stepper(document.querySelector('.bs-stepper'))
//   })


//   var stepper = new Stepper(document.querySelector('.bs-stepper'))
// stepper.next()

// var stepper = new Stepper(document.querySelector('.bs-stepper'))

// /// Will navigate to the second step
// stepper.to(2)

// var stepperEl = document.getElementById('stepper')
// var stepper = new Stepper(stepperEl)

// stepperEl.addEventListener('show.bs-stepper', function (event) {
//   // You can call prevent to stop the rendering of your step
//   // event.preventDefault()

//   console.warn(event.detail.indexStep)
// })

// stepperEl.addEventListener('shown.bs-stepper', function (event) {
//   console.warn('step shown')
// })
(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {

            }
            form.classList.add('was-validated');
        }, false);
    });
})();


var stepper1
var stepper2
var stepper3
var stepper4
var stepperForm

document.addEventListener('DOMContentLoaded', function() {
    stepper1 = new Stepper(document.querySelector('#stepper1'))
    stepper2 = new Stepper(document.querySelector('#stepper2'), {
        linear: false
    })
    stepper3 = new Stepper(document.querySelector('#stepper3'), {
        linear: false,
        animation: true
    })
    stepper4 = new Stepper(document.querySelector('#stepper4'))

    var stepperFormEl = document.querySelector('#stepperForm')
    stepperForm = new Stepper(stepperFormEl, {
        animation: true
    })

    var btnNextList = [].slice.call(document.querySelectorAll('.btn-next-form'))
    var stepperPanList = [].slice.call(stepperFormEl.querySelectorAll('.bs-stepper-pane'))
    var inputMailForm = document.getElementById('inputMailForm')
    var inputPasswordForm = document.getElementById('inputPasswordForm')
    var form = stepperFormEl.querySelector('.bs-stepper-content form')

    stepperFormEl.addEventListener('show.bs-stepper', function(event) {
        form.classList.remove('was-validated')
        var nextStep = event.detail.indexStep
        var currentStep = nextStep

        if (currentStep > 0) {
            currentStep--
        }

        var stepperPan = stepperPanList[currentStep]

        if ((stepperPan.getAttribute('id') === 'test-form-1' && !inputMailForm.value.length) ||
            (stepperPan.getAttribute('id') === 'test-form-2' && !inputPasswordForm.value.length)) {
            event.preventDefault()
            form.classList.add('was-validated')
        }
    })
})