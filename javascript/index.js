$.validator.addMethod(
	// ルールの名前を指定
	'regex',
	// ルールのメソッド
	function (value, element, regexp) {
		return this.optional(element) || regexp.test(value)
	},
	// ルールに反した時のメッセージ
	'半角数字で入力してください'
)

$(function () {
	$('#form').validate({
		rules: {
			name: {
				required: true,
				maxlength: 20,
			},
			gender: {
				required: true,
			},
			year: {
				required: true,
			},
			phone: {
				required: true,
				regex: /^[0-9]+$/,
				minlength: 10,
				maxlength: 11,
			},
			zipcode: {
				regex: /^[0-9]+$/,
				minlength: 7,
				maxlength: 7,
			},
			address: {
				maxlength: 50,
			},
		},
		messages: {
			name: {
				required: '名前を入力してください',
				maxlength: '20文字以内で入力してください',
			},
			gender: {
				required: '選択してください',
			},
			year: {
				required: '選択してください',
			},
			phone: {
				required: '電話番号を入力してください',
				minlength: '10文字か11文字で入力してください',
				maxlength: '10文字か11文字で入力してください',
			},
			zipcode: {
				minlength: '郵便番号は7文字です',
				maxlength: '郵便番号は7文字です',
			},
			address: {
				maxlength: '50文字以内で入力してください',
			},
		},
	})
})

$(function () {
	$(function () {
		$('#zipcode').jpostal({
			postcode: ['#zipcode'],
			address: {
				'#address': '%3%4%5',
			},
		})
	})
})

let i = 1
$('#addbtn').on('click', function () {
	$('#path').append(`
	<label for="inst${i}">通過駅</label>
	<input type="text" class="form-control" name="inst${i}" id="inst${i}"></input>	
	`)
	i++
})
