// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

let pic1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3],
    [0, 0, 0, 0, 0, 6, 6, 6, 3, 3, 6, 3, 0, 6, 6, 6],
    [0, 0, 0, 0, 6, 3, 6, 3, 3, 3, 6, 3, 3, 6, 6, 6],
    [0, 0, 0, 0, 6, 3, 6, 6, 3, 3, 3, 6, 3, 3, 3, 6],
    [0, 0, 0, 0, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 0],
    [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 6, 0, 0],
    [0, 0, 6, 6, 6, 6, 6, 4, 6, 6, 6, 4, 6, 0, 0, 0],
    [0, 6, 6, 6, 6, 6, 6, 6, 4, 6, 6, 6, 4, 0, 0, 6],
    [3, 3, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 0, 0, 6],
    [3, 3, 3, 0, 4, 4, 6, 4, 4, 3, 4, 4, 3, 4, 6, 6],
    [0, 3, 0, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6],
    [0, 0, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6],
    [0, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0],
    [0, 6, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
];

let pic2 = [
    [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0],
    [0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0],
    [0, 0, 5, 8, 8, 5, 5, 5, 5, 5, 5, 8, 8, 5, 0, 0],
    [0, 5, 5, 5, 2, 8, 5, 5, 5, 5, 8, 2, 5, 5, 5, 0],
    [0, 5, 5, 5, 2, 8, 8, 8, 8, 8, 8, 2, 5, 5, 5, 0],
    [5, 5, 5, 5, 2, 8, 2, 5, 5, 2, 8, 2, 5, 5, 5, 5],
    [5, 5, 5, 5, 2, 2, 2, 5, 5, 2, 2, 2, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [0, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 8, 8, 0, 0, 0],
    [0, 8, 8, 8, 8, 8, 8, 2, 2, 2, 8, 8, 8, 0, 0, 0],
    [0, 0, 8, 8, 8, 8, 8, 2, 2, 8, 8, 8, 0, 0, 0, 0],
];

let pic3 = [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 1, 1, 7, 3, 0],
    [0, 0, 1, 1, 3, 1, 1, 0, 0, 3, 3, 1, 1, 7, 3, 0],
    [0, 1, 1, 1, 1, 3, 1, 0, 0, 3, 3, 1, 1, 7, 3, 0],
    [0, 1, 1, 1, 1, 3, 1, 1, 0, 3, 3, 1, 1, 1, 3, 0],
    [0, 0, 1, 1, 1, 1, 3, 1, 0, 3, 3, 3, 1, 3, 3, 3],
    [0, 1, 0, 1, 1, 1, 3, 1, 0, 3, 3, 3, 3, 3, 7, 3],
    [0, 1, 1, 1, 1, 1, 3, 1, 0, 0, 3, 3, 3, 3, 3, 3],
    [0, 0, 1, 1, 1, 3, 1, 7, 7, 0, 3, 3, 0, 3, 3, 3],
    [0, 7, 7, 7, 1, 1, 1, 7, 7, 0, 3, 3, 0, 0, 3, 3],
    [0, 7, 7, 7, 3, 7, 3, 7, 7, 7, 1, 3, 3, 0, 3, 3],
    [0, 3, 7, 3, 7, 7, 7, 3, 7, 7, 1, 3, 3, 0, 3, 0],
    [0, 7, 3, 7, 7, 7, 7, 7, 7, 3, 1, 3, 3, 0, 0, 0],
    [0, 7, 3, 7, 7, 7, 7, 7, 3, 7, 1, 1, 3, 3, 0, 0],
    [0, 3, 7, 3, 7, 7, 7, 3, 7, 3, 7, 1, 3, 0, 0, 0],
    [0, 7, 7, 7, 3, 7, 3, 7, 7, 7, 3, 1, 3, 0, 0, 0],
    [0, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 1, 0, 0, 0, 0],
    [1, 1, 1, 7, 3, 7, 3, 7, 7, 7, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 7, 7, 3, 1, 1, 1, 3, 3, 0, 0, 0],
    [0, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 0, 0],
    [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0],
];

let pic4 = [
    [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 8, 8],
    [0, 0, 0, 0, 8, 8, 8, 2, 2, 2, 2, 2, 8, 0, 2, 2],
    [0, 0, 0, 8, 8, 8, 2, 8, 8, 8, 8, 8, 8, 5, 8, 8],
    [0, 0, 8, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 8, 8],
    [0, 8, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 8, 8],
    [8, 2, 8, 2, 8, 8, 8, 8, 8, 5, 5, 8, 8, 5, 8, 8],
    [8, 8, 2, 8, 8, 8, 8, 2, 8, 2, 2, 5, 8, 5, 8, 8],
    [8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 2, 5, 8, 5, 8, 8],
    [8, 8, 8, 8, 8, 2, 2, 2, 2, 2, 8, 8, 8, 5, 8, 8],
    [0, 8, 8, 8, 8, 8, 2, 2, 2, 8, 8, 8, 8, 5, 8, 8],
    [0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 8, 8],
    [0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 8, 8],
    [0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 8, 8],
    [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 8, 8],
];

/* Call your rendering function four separate times, sending each of the
   above variables as an argument. For example, if your rendering function
   is called "displayPixelArt", your code would look like this:

   displayPixelArt(pic1)
   displayPixelArt(pic2)
   displayPixelArt(pic3)
   displayPixelArt(pic4)
*/
displayPixelArt(pic1)
displayPixelArt(pic2)
displayPixelArt(pic3)
displayPixelArt(pic4)
function displayPixelArt(picture) {
    
 let section = document.createElement('section')
 if( picture === pic1){
    section.setAttribute('style', 'width: 240px; height: 240px; padding: 40px')
 } else if (picture === pic2){
     section.setAttribute('style', 'width: 240px; height: 230px; padding: 40px ')
 } else if (picture === pic3){
     section.setAttribute('style', 'width: 240px; height: 300px; padding: 40px ')
 } else if (picture === pic4){
     section.setAttribute('style', 'width: 240px; height: 210px; padding: 40px ')
 }
   
    for (let row = 0; row < picture.length; row++) {
        let rowOfPix = picture[row]
        
        for (let pixelColor = 0; pixelColor < rowOfPix.length; pixelColor++) {

            let spanEl = document.createElement('span')
            let pixelColors = rowOfPix[pixelColor]

            switch (pixelColors) {
                case 0:
                    spanEl.style.backgroundColor = 'transparent';
                    break;
                case 1: 
                    spanEl.style.backgroundColor = '#ffffff';
                    break;
                case 2: 
                    spanEl.style.backgroundColor = '#ffc6b5';
                    break;
                case 3: 
                    spanEl.style.backgroundColor = '#ff945a';
                    break;
                case 4: 
                    spanEl.style.backgroundColor = '#ff3118';
                    break;
                case 5: 
                    spanEl.style.backgroundColor = '#d64a00';
                    break;
                case 6: 
                    spanEl.style.backgroundColor = '#c66300';
                    break;
                case 7: 
                    spanEl.style.backgroundColor = '#188410';
                    break;
                default: 
                    spanEl.style.backgroundColor = '#000000';
                    
            }
            section.append(spanEl);

        }
    }
  
  let imageContainer = document.querySelector('.container')
  imageContainer.append(section)
}


// 0(transparent)
// 1	   #ffffff
// 2	   #ffc6b5
// 3	   #ff945a
// 4	   #ff3118
// 5	   #d64a00
// 6	   #c66300
// 7	   #188410
// 8	   #000000