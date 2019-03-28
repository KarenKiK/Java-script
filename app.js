let isLOng = 10;
let isWith = 10;
let isHight = 3;

let withWallpaperInM = 1;
let longWallpaperInM = 10;

let perimeters = (isLOng + isWith) * 2;
let clothNumber =  parseInt(perimeters / withWallpaperInM);
let stripNumberWallpaper = parseInt(longWallpaperInM / isHight) + 1;

let rollsWallpaper = parseInt(clothNumber / stripNumberWallpaper) + 1;

console.log(rollsWallpaper);

