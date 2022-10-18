const inputs = document.querySelectorAll('.controls input')

inputs.forEach(input => input.addEventListener('change', handleUpdateInputs))
inputs.forEach(input => input.addEventListener('input', handleUpdateInputs))

function handleUpdateInputs() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

handleUpdateInputs()