	var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    var bomb=canvas.getContext("2d");
    var image1=new Image();
    image1.src="imag1.png";
    var img11=new Image();
    img11.src="img11.png";
    var image=new Image();
    image.src="img2.png";
    var fin=new Image();
    fin.src="fin.png";
  
    image.onload=function(){
     
      alert("welcome to panzer game");}
    bomb.drawImage(fin,0,0,fin.width,fin.height,200,50,500,500);
    
    var aud=new Audio();
    aud.src ="nn.mp3"
    var audi=new Audio();
    audi.src="br.mp3"
    var p1=250;
    var p2=200;
    var b1=820;
    var b2=300
    var x1=1000;
    var y1=100;
    var xwdth1=100;
    var ywdth1=100;
    var x2=50;
    var y2=100;
    var posx=x2;
    var posx1=x1;
    var i=0;
    var j=0;
  var test="0";
  var test1="0";
  var a=0;
  var b=0;
    window.requestAnimationFrame(function nadhem()
	{ audi.play();
   // alert("336")
     context.clearRect(0,0,canvas.width,canvas.height);
   context.drawImage(image,194,213,257,244,x1,y1,350,350);
   context.drawImage(image,37,215,104,242,x2,y2,150,350);
     context.fillRect(p1,p2,25,100)
     context.fillRect(b1,b2,25,100)
 
  //bomb 1
   if(test1=="1")
   {
    posx1=posx1-10;
    bomb.drawImage(image1,15,16,184,191,posx1,posy1,30,30);
    //alert("11")
  }
    if((posx1==0)||((posx1==p1)&&((posy1>=p2)&&(posy1<=p2+100))))
    {posx1=x1;
      test1="0";
      a+=1;
    
    } 
    if((posx1==x2)&&(posy1==y2))
    
    { posx1=x1;
      test1="0";
      aud.play();
    j+=1;}
    //bob 2
   if(test=="1")
   {
    
    posx=posx+10;
     bomb.drawImage(image1,15,16,184,191,posx,posy,30,30);
      }
      if((posx>=canvas.width)||((posx==b1)&&((posy>=b2)&&(posy<=b2+100))))
      {
        posx=x2;
       test="0";
           b+=1;
   
    
  }
   if((posx==x1)&&(posy==y1))
   
   {posx=x2
    test="0"
    aud.play();
  i+=1;}
  if(i==5)
  {     context.clearRect(0,0,canvas.width,canvas.height);
    bomb.drawImage(fin,0,0,fin.width,fin.height,450,150,500,500);
    context.drawImage(image,37,215,104,242,200,100,150,350);
return false;    
    
  }
  else if(j==5)
  {      context.clearRect(0,0,canvas.width,canvas.height);
    bomb.drawImage(fin,0,0,fin.width,fin.height,450,150,500,500);
    context.drawImage(image,194,213,257,244,1000,100,350,350);
    
return false;   
    //  alert(j2+" est gagnee");
 
  }
  if(b==7)
  {  b1=820;
     b2=100;
    b=0;
  }
  else if(b==3)
  {b1=700;
  b2=300;
}
else if(b==6)
{b1=900;
b2=500;}
  if(a==7)
  {  p1=250;
     p2=100;
    a=0;
  }
   else if(a==3)
  {p1=300;
  p2=300;
}
else if(a==6)
{p1=250;
p2=500;}
   window.requestAnimationFrame(nadhem);
     
    })
    document.addEventListener('keydown',function(event)
	{
     var c=event.keyCode;
  // alert(c)
  if((c=="32")&&(test1=="0"))
  {//alert("espace")
    test1="1";
    posx1=x1;
    posx1=posx1-10
  posy1=y1;
  }
      if(c=="40")
      { 
      y1 +=10;
     
      }
      if(c=="38")
      { 
      y1 -=10;
      } 
      if(c=="37")
      { if(x1==700)
        {x1=x1;}
        else
        {x1 -=10;}
          
      }
     if(c=="39")
     {
      x1 +=10;
     }
    


     if((c=="88")&&( test=="0"))
     { 
    test="1";  
    posx=x2;
    posx=posx+10;
    
    posy=y2;
     }
     if(c=="90")
     {
      y2 -=10;
     }
     if(c=="68")
     {
      if(x2==500)
      {x2=x2;}
      else
      {x2 +=10;}
     }
     if(c=="83")
     {
      y2 +=10;
     }
     if(c=="81")
     {
      x2 -=10;
     }
    })

 