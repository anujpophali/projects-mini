let money;

document.getElementById('money').addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        money = event.target.value;
        if (isNaN(money) || money == 0) {
            document.getElementById('error').classList.remove('hidden');
            document.getElementById('manage').classList.add('hidden');
        } else {
            document.getElementById('error').classList.add('hidden');
            document.getElementById('manage').classList.remove('hidden');
        }
    }
});

document.getElementById('evaluate').addEventListener('click', () => {
    document.getElementById('loader').classList.remove('hidden');
    setTimeout(validateManage, 1000);
});

const validateManage = () => {
	document.getElementById('loader').classList.add('hidden');
    if (document.getElementById('necessity').value == "" ||
        document.getElementById('accessories').value == "" ||
        document.getElementById('emergency').value == "" ||
        document.getElementById('savings').value == "") {
        document.getElementById('error_manage').textContent = "Please input all the values";
    } else {
        document.getElementById('error_manage').textContent = "";
        if (parseInt(document.getElementById('necessity').value) +
            parseInt(document.getElementById('accessories').value) +
            parseInt(document.getElementById('emergency').value) +
            parseInt(document.getElementById('savings').value) > 100) {
            document.getElementById('error_manage').textContent = " Alert!!!, Total exceeding 100!!";
        } else {
            result(parseInt(document.getElementById('necessity').value),
                parseInt(document.getElementById('accessories').value),
                parseInt(document.getElementById('emergency').value),
                parseInt(document.getElementById('savings').value));
        }
    }
}

const result = (necessity, accessories, emergency, savings) => {
    document.getElementById('show-necessity').textContent = `₹ ${(necessity/100)*money}`;
    document.getElementById('show-accessories').textContent = `₹ ${(accessories/100)*money}`;
    document.getElementById('show-emergency').textContent = `₹ ${(emergency/100)*money}`;
    document.getElementById('show-savings').textContent = `₹ ${(savings/100)*money}`;

    document.getElementById('result').classList.remove('hidden');
}

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
});