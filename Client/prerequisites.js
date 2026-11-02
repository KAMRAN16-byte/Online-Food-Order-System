const daisyUI = document.createElement('link')
daisyUI.href = 'https://cdn.jsdelivr.net/npm/daisyui@5'
daisyUI.rel = 'stylesheet'
daisyUI.type = 'text/css'
document.head.appendChild(daisyUI)

const tailwindcss = document.createElement('script')
tailwindcss.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'
document.head.appendChild(tailwindcss)
