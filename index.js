// Question number 3, writing a program that will help Bolatito determine the subjects 
//she will be taking for the session using her class group. 
//Also, in the case of an invalid class group, output should be the General subjects.

//Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
//Social Science Subjects - Accounting, Commerce, Marketing, Geography
//Arts Subjects - Government, Economics, Literature, History
//General Subjects - English, Mathematics

let studentGroup = 'arts';

if (studentGroup === 'science') {
    console.log('English, Mathematics, Physics, Chemistry, Biology, Technical Drawing');
} else if (studentGroup === 'social sciences') {
    console.log('English, Mathematics, Accounting, Commerce, Marketing, Geography');
} else if (studentGroup === 'arts') {
    console.log('English, Mathematics, Government, Economics, Literature, History');
} 
else {
    console.log('English, Mathematics');
}


// Question number 5

// JavaScript program to find highest power
// of 2 smaller than or equal to a given positive number.



{
	let pwr = 0;
    let num = 19
	for (let index = num; index >= 1; index--)
		{
		// If index is a power of 2
		if ((index & (index - 1)) == 0)
			{
				pwr = index;
				break;
			}
		}
	console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");
}



