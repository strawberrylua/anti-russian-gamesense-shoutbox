// ==UserScript==
// @name				Custom forum settings (Beta)
// @namespace			https://github.com/strawberrylua/anti-russian-gamesense-shoutbox
// @version				1.0.0
// @description			Since russians think that the only language spoken worldwide is their garbage, I've put togheter this tampermonkey script in matter of minutes to remove text in russian on the shoutbox.
// @match				https://gamesense.vip/forums/*
// @connect				img.gamesense.vip
// @author				Strawberry
// @supportURL			https://github.com/strawberrylua/anti-russian-gamesense-shoutbox
// @contributionURL		https://github.com/strawberrylua/anti-russian-gamesense-shoutbox
// @icon				https://external-content.duckduckgo.com/ip3/gamesense.vip.ico
// @grant				none
// @run-at				document-end
// @downloadURL			https://raw.githubusercontent.com/strawberrylua/anti-russian-gamesense-shoutbox/main/index.user.js
// @updateURL			https://raw.githubusercontent.com/strawberrylua/anti-russian-gamesense-shoutbox/main/index.user.js
// ==/UserScript==

(function() {
    'use strict';

    const settingsIconSVG = `
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path></svg>
    `;

    function createSettingsModal() {
        const modal = document.createElement('div');
        modal.id = 'customSettingsModal';
        modal.style.display = 'none';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundImage = "url('https://img.gamesense.vip/i/yA1VS.png')";
        //modal.style.backgroundColor = '#111111';
        modal.style.border = '3px solid #3b3833';
        modal.style.padding = '20px';
        modal.style.zIndex = 1000;
        modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        modal.style.width = '400px';
        modal.style.fontFamily = 'consolas,monaco,"bitstream vera sans mono","courier new",courier,monospace';
        modal.style.boxSizing = 'border-box';

        const rainbowBar = document.createElement('div');
        rainbowBar.style.height = '2px';
        rainbowBar.style.width = '100%';
        rainbowBar.style.background = 'linear-gradient(to right, #267996, #8c4479, #839123)';

        rainbowBar.style.position = 'absolute';
        rainbowBar.style.top = '1px';
        rainbowBar.style.left = '0';

        modal.appendChild(rainbowBar);
        document.body.appendChild(modal);


        const modalTitle = document.createElement('h3');
        modalTitle.style.color = '#fff';
        modalTitle.style.textAlign = 'center';
        modalTitle.textContent = 'Custom forum settings';


        const toggleLabel = document.createElement('label');
        toggleLabel.style.color = '#fff';
        toggleLabel.style.display = 'flex';
        toggleLabel.style.alignItems = 'center';
        toggleLabel.style.marginBottom = '10px';
        toggleLabel.style.fontSize = '12px'
        const toggleCheckbox = document.createElement('input');
        toggleCheckbox.type = 'checkbox';
        toggleCheckbox.checked = localStorage.getItem('removeCyrillic') !== 'false';
        toggleCheckbox.style.marginRight = '10px';
        toggleCheckbox.onchange = () => {
            localStorage.setItem('removeCyrillic', toggleCheckbox.checked);
            processAllRows();
        };
        const toggleText = document.createTextNode('Remove cyrillic text from shoutbox');

        const steamHappyLabel = document.createElement('label');
        steamHappyLabel.style.color = '#fff';
        steamHappyLabel.style.display = 'flex';
        steamHappyLabel.style.alignItems = 'center';
        steamHappyLabel.style.marginBottom = '10px';
        steamHappyLabel.style.fontSize = '12px'
        const steamHappyCheckbox = document.createElement('input');
        steamHappyCheckbox.type = 'checkbox';
        steamHappyCheckbox.checked = localStorage.getItem('replaceCyrillicWithSteamHappy') === 'true';
        steamHappyCheckbox.style.marginRight = '10px';
        steamHappyCheckbox.onchange = () => {
            localStorage.setItem('replaceCyrillicWithSteamHappy', steamHappyCheckbox.checked);
            if (steamHappyCheckbox.checked) {
                replaceCyrillicMessages();
            }
        };
        const steamHappyText = document.createTextNode('Replace cyrillic with SteamHappy');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = localStorage.getItem('originalUsername') || 'Username';
        nameInput.value = localStorage.getItem('newUsername') || '';
        nameInput.style.width = 'calc(100% - 20px)';
        nameInput.style.padding = '5px';
        nameInput.style.marginBottom = '10px';
        nameInput.style.border = '1px solid #0c0c0c';
        nameInput.style.backgroundColor = '#232323';
        nameInput.style.color = '#ccc';
        nameInput.style.boxSizing = 'border-box';
        nameInput.style.fontFamily = 'Verdana,Helvetica,Arial,sans-serif';
        nameInput.style.fontSize = '14px';

        function replaceUsername(newUsername) {
            localStorage.setItem('newUsername', newUsername);

            const onlineList = document.getElementById('onlinelist');
            if (onlineList) {
                const ddElements = onlineList.getElementsByTagName('dd');
                for (const dd of ddElements) {
                    const aElements = dd.getElementsByTagName('a');
                    for (const a of aElements) {
                        if (a.textContent === localStorage.getItem('originalUsername')) {
                            a.textContent = newUsername;
                        }
                    }
                }
            }
        }

        nameInput.oninput = () => {
            replaceUsername(nameInput.value);
        };

        document.body.appendChild(nameInput);
        replaceUsername(nameInput.value);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.display = 'block';
        closeButton.style.margin = '0 auto';
        closeButton.style.padding = '5px 10px';
        closeButton.style.border = '1px solid #111111';
        closeButton.style.backgroundColor = '#202020';
        closeButton.style.color = '#fff';
        closeButton.style.cursor = 'pointer';
        closeButton.onclick = () => {
            modal.style.display = 'none';
            location.reload();
        };

        toggleLabel.appendChild(toggleCheckbox);
        toggleLabel.appendChild(toggleText);
        steamHappyLabel.appendChild(steamHappyCheckbox);
        steamHappyLabel.appendChild(steamHappyText);
        modal.appendChild(modalTitle);
        modal.appendChild(toggleLabel);
        modal.appendChild(steamHappyLabel);
        modal.appendChild(nameInput);
        modal.appendChild(closeButton);

        document.body.appendChild(modal);
    }

    function openSettingsModal() {
        const modal = document.getElementById('customSettingsModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }

    function addSettingsButton() {
        if (['/forums/', '/forums/index.php'].includes(window.location.pathname)) {
            const h2Element = document.querySelector('h2');
            if (h2Element) {
                const button = document.createElement('button');
                button.innerHTML = settingsIconSVG;
                button.style.position = 'absolute';
                button.style.right = '1px';
                button.style.top = '4px';
                button.style.padding = '4px 4px';
                button.style.borderRadius = '5px';
                button.style.border = 'none';
                button.style.backgroundColor = 'rgb(68 68 68 / 0%)';
                button.style.color = '#bbb';
                button.style.cursor = 'pointer';
                button.onclick = (e) => {
                    e.preventDefault();
                    openSettingsModal();
                };
                h2Element.style.position = 'relative';
                h2Element.appendChild(button);
            }
        }
    }

    function containsCyrillic(text) {
        return /[\u0400-\u04FF]/.test(text);
    }

    function processNewRow(row) {
        if (localStorage.getItem('removeCyrillic') !== 'false' && containsCyrillic(row.innerText)) {
            row.remove();
        } else {
            row.style.display = '';
        }
    }

    function processAllRows() {
        const shoutbox = document.getElementById('shout');
        const existingRows = shoutbox.querySelectorAll('.rowEven, .rowOdd');
        existingRows.forEach(row => processNewRow(row));
    }

    function replaceUsername(newName) {
        const originalUsername = localStorage.getItem('originalUsername');
        if (originalUsername) {
            const usernameElements = document.querySelectorAll('strong');
            usernameElements.forEach(element => {
                if (element.textContent.trim() === originalUsername) {
                    element.textContent = newName;
                }
            });
        }
    }

    function containsCyrillicInMessage(text) {
        return /[А-Яа-яЁё]/.test(text);
    }

    function replaceCyrillicMessages() {
        const messages = document.querySelectorAll('.postright');

        messages.forEach(message => {
            if (containsCyrillicInMessage(message.innerText)) {
                message.innerHTML = '<img src="https://img.gamesense.vip/i/e8yZZ.png" width=200 height=200>';
            }
        });
    }

    function initialize() {
        const originalUsernameElement = document.querySelector('#brdwelcome strong');
        if (originalUsernameElement) {
            localStorage.setItem('originalUsername', originalUsernameElement.textContent.trim());
        }

        const newUsername = localStorage.getItem('newUsername');
        if (newUsername) {
            replaceUsername(newUsername);
        }

        createSettingsModal();
        addSettingsButton();

        const shoutbox = document.getElementById('shout');
        if (shoutbox) {
            const observer = new MutationObserver(mutations => {
                for (let mutation of mutations) {
                    for (let addedNode of mutation.addedNodes) {
                        if (addedNode.nodeType === Node.ELEMENT_NODE) {
                            if (addedNode.classList.contains('rowEven') || addedNode.classList.contains('rowOdd')) {
                                processNewRow(addedNode);
                            }
                        }
                    }
                }
            });

            observer.observe(shoutbox, { childList: true, subtree: true });

            processAllRows();
        }

        if (localStorage.getItem('replaceCyrillicWithSteamHappy') === 'true') {
            replaceCyrillicMessages();
            setInterval(replaceCyrillicMessages, 5000);
        }
    }

    initialize();
})();
