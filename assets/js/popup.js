/**
 * @name popup
 * @description Generate passwords by length
 * @since 1.0.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */

/**
 * @description Listen for button being clicked and generate password depending on strength number
 */
const checkPageButton = document.getElementById('button');
checkPageButton.addEventListener('click', function() {
    
    function generatePassword() {
        const number = document.getElementById("number").value;
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{};:'\"#";
        let val = "";
        for (i = 0, n = chars.length; i < number; ++i) {
            val += chars.charAt(Math.floor(Math.random() * n));
        }
        return val;
    }

    function showPassword() {
        const el = document.getElementById("password");
        el.disabled = false;
        el.value = generatePassword();
    }
    return showPassword();

}, false);
