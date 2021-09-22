$(function () {
	$('#form').validate({
		rules: {
			name: {
				required: true,
			},
			gender: {
				required: true,
			},
			year: {
				required: true,
			},
			phone: {
				required: true,
			},
			address: {
				maxlength: 50,
			},
		},
		messages: {
			name: {
				required: '名前を入力してください',
			},
			gender: {
				required: '選択してください',
			},
			year: {
				required: '選択してください',
			},
			phone: {
				required: '電話番号を入力してください',
			},
			address: {
				maxlength: '50文字以内で入力してください',
			},
		},
	})
})
