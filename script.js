const social_el = document.querySelector('.container-socials');
const btn_el = document.querySelector('.share');

let check = false;
btn_el.addEventListener('click', () => {
    if(!check)
    {
        social_el.classList.remove('hidden');
        check = true;
    }
    else
    {
        social_el.classList.add('hidden');
        check = false;
    }
});