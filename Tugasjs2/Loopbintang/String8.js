var i;
var j;

console.log('Soal 1');
for (i = 1; i <=5; i++) {
	console.log('*');
}

console.log("NESTED LOOPING");
for ( i = 0; i <5; i++) {
	var rows1='';
	for (j = 0; j <5; j++){
	rows1 += '*';
	}
	console.log(rows1);
}

console.log('Soal 3');


for (i = 0; i < 1; i++) {
	rows1 ='';
	for (j = 0; j < 5; j++) {
		rows1 +='*';
		console.log(rows1);
	}

}