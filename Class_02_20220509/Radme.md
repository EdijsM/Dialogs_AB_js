# 1. uzdevums.  
Atrast saviem iniciāļiem BIN / DEC / HEX / OCT skaitļus un krāsu  

## Mani iniciāļi - **EM**   
  
## 1. BIN    
*0100010101001101*  
Par bināro kodu sīkāk var uzināt [Class_01_20220502](https://github.com/EdijsM/Dialogs_AB_js/tree/main/Class_01_20220502) nodrabībā.

## 2. DEC 
*69 377*  
> Decimālskaitļu sistēma ir visbiežāk izmantotā un standarta sistēma ikdienas dzīvē. Tas izmanto skaitli 10 kā bāzi (radiksu). Tāpēc tajā ir 10 simboli: skaitļi no 0 līdz 9; proti, 0, 1, 2, 3, 4, 5, 6, 7, 8 un 9.
>Kā vienu no vecākajām zināmajām ciparu sistēmām decimālo ciparu sistēmu ir izmantojušas daudzas senās civilizācijas. Grūtības attēlot ļoti lielus skaitļus decimālajā sistēmā tika pārvarētas, izmantojot hinduistu-arābu ciparu sistēmu. Hindu-arābu ciparu sistēma piešķir cipariem pozīcijas, un šī metode darbojas, izmantojot 10. bāzes pakāpju; cipari tiek palielināti līdz n-tajam pakāpim atbilstoši to pozīcijai.[^3]


## 3. HEX    
*45 4D*  
> Heksadecimālā sistēma (HEX) izmanto skaitli 16 kā bāzi (radix). Kā 16 bāzes ciparu sistēma tajā izmanto 16 simbolus. Tie ir 10 decimālskaitļi (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) un pirmie seši angļu alfabēta burti (A, B, C, D, E, F). Burti tiek izmantoti, jo vienā simbolā ir jāattēlo vērtības 10, 11, 12, 13, 14 un 15.
> Hex tiek izmantots matemātikā un informācijas tehnoloģijās kā draudzīgāks veids, kā attēlot bināros skaitļus. Katrs hex cipars apzīmē četrus bināros ciparus; tāpēc hex ir valoda bināra rakstīšanai saīsinātā formā.
> Četri bināri cipari (saukti arī par nibbles) veido pusi baita. Tas nozīmē, ka viens baits var saturēt bināras vērtības no 0000 0000 līdz 1111 1111. Hekstārijā tās var attēlot draudzīgākā veidā, sākot no 00 līdz FF.
> HTML programmēšanā krāsas var attēlot ar 6 ciparu heksadecimālu skaitli: FFFFFF apzīmē baltu, bet 000000 apzīmē melnu.[^4]  

## 4. OCT  
*105 115* 

>Astotnieku skaitļu sistēma (vai īsi okt) izmanto skaitli 8 kā bāzi (radiksu). Kā 8. bāzes ciparu sistēma tajā izmanto astoņus simbolus: skaitļus no 0 līdz 7, proti, 0, 1, 2, 3, 4, 5, 6 un 7. Lai gan dažas indiāņu ciltis to izmantoja līdz 20. gadsimtam. , oktālā sistēma ir kļuvusi populāra skaitļošanas sākumposmā kā datorprogrammēšanas valoda. Tas ir tāpēc, ka oktālā sistēma saīsina bināros datus, vienkāršojot garas un sarežģītas bināro displeju ķēdes, ko izmanto datori.
>Astotnieku sistēmu galvenokārt izmanto bināro skaitļu skaitīšanai trīs grupās: Katrs oktālais cipars apzīmē trīs bināros ciparus. Tā kā 8 ir 2 līdz trešajai pakāpei (2 trešajā pakāpē), oktālā sistēma kļuva par perfektu binārā saīsinājumu iekārtām, kurās izmanto vārdu lielumus, kas dalās ar trīs — 6 bitu, 12 bitu, 24 bitu vai 36 bitu. Mūsdienās lielākā daļa mūsdienu sistēmu izmanto heksadecimālo, nevis oktālo. Tomēr oktālie skaitļi ir svarīga elektronikas pamatzināšanu sastāvdaļa.[^5]

## 5. Color  
*00000 0000FF*  
Krāsas iespējams aprasktīt HEX color code, RGB color code, HSL color code un ar vārdiem iekš HTML code.  
```  
#  Name      HEX           RGB           HSL
1  Black   #000000   rgb(0, 0, 0)      hsl(1, 0%, 0%)
2  Blue    #0000FF   rgb(0, 0, 255)    hsl(240, 100%, 50%)
  
```  
Kā tas izskatās iekš koda.  
  HTML
  ```
  <body>
  <p style="color:red;">Red paragraph text</p>
  </body>
  ```  
  
  HEX
  ```
  <body>
  <p style="color:#FF0000";>Red paragraph text</p>
  </body>
  ```

  RGB  
  ```
  <body>
  <p style="color:rgb(255,0,0);">Red paragraph text</p>
  </body>
  ```  

  HSL
  ```
  <body>
  <p style="color:hsl(0,100%,50%);">Red paragraph text</p>
  </body>
```
  
 > Kā var uzzināt kāds HEX vai RGB kods ir krāsai?  
 Vienkāršākais veids ir turēt pie rokas [krāsu paleti](https://htmlcolorcodes.com/color-names/). Ļoti noderēs ja zināsiet biežak izmantotot krāsu kodus. [^6] 

# 2. uzdevums.  
**Kā tika dabūti skaitļi no iniciāļiem ?**   
iegāju google.lv un ierakstiju text to Decimal. Man atrada mājaslapu [cryptii.com](https://cryptii.com/pipes/text-decimal) kurā varēju viegli konvertēt savus iniciāļus uz skaitļiem.   

**Kā tos ir iespējams dabūt bez googles palīdzības?**  
Tā kā visu 128 simbolu secība ciparu sitstēmās ir stanartizēti, tad to secība mums ir zināma.  Atliek tikai saprst kā tiek piešķirta katram simbolam vērtība.  Vai arī izmantoju ASCII tabulu [^1]. 
> *Amerikas informācijas apmaiņas standarta kods* (ASCII) ir līdzeklis ciparu komunikāciju rakstzīmju kodēšanai. Sākotnēji tas tika izstrādāts 1960. gadu sākumā, kad tika izstrādāti agrīni tīkla sakari. [^2]  

Iepriekš minētā mājaslapa ne vienmēr būs pieejama, toties tabula datorā būs pieejama pat tad ja internets nedarbosies. Sekotojot atsaucēm kuras esmu pievienojis pie ciparu sitēmu aprakstiem, varēs redzēt kā tiek piešķirtas vai aprēķinātas vērtības simboliem vai to kopām.

  
[^1]: [ tabula ](/../main/assets/images/ascii-table-alpharithms-scaled.jpg)  
[^2]: [ASCII - tabula alpharithms.com](https://www.alpharithms.com/ascii-table-512119/)  
[^3]: [DEC - binaryhexconverter.com](https://www.binaryhexconverter.com/ascii-text-to-decimal-converter)  
[^4]: [HEX - binaryhexconverter.com](https://www.binaryhexconverter.com/ascii-text-to-hex-converter)    
[^5]: [OCT - binaryhexconverter.com](https://www.binaryhexconverter.com/binary-to-octal-converter)  
[^6]: [Color - w3school.com ](https://www.w3schools.com/colors/)