# setTimeOut-react-examples
# Title of Project : 
** Action in Time**

# Description :
** This project basicly is to show other programmers how we can easly use setTimeout function, the mechanism and pretty cool adeas of course to develope. I hope form of this artcile will be clear and comprehensible for all of us in Tech World**

# How to run : 
**Pliki po pobraniu należy pobrać i zapisać na dowolnym serwerze www np Apache.**

## Skrypt bazuje przede wszystkim na filtrowaniu, kontroli wagi oraz typu plikow 
``` 
function checkSizeAndDisplay(fileObject)
{
    const type_of_files = file => file.type == "text/plain" || file.type == "application/msword" || file.type == "image/jpeg";
    
    if(sumOfSize < 2000000)  // 2MB 
    {
      Array.from(fileObject).filter(type_of_files).forEach(f => 
      {
        filterSettings(f);
        
      });
    }else{
      alert("To many files loaded"); 
      }
}
```

## Będziemy filtrować również dokumenty typu ,,doc"
``` 
if(f.type ===  "application/msword")
    {
          var picture = new Image(70,140);
          picture.src = "file_icons/icons8-doc-52.png";
          showIconPlace.appendChild(picture);
               
          displayFileParameter(f);
    }
```

Resztę kodu można znaleźć w folderze
Some usefull examples for setTimeOut
