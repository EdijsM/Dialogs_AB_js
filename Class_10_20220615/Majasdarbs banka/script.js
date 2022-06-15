var userName = "Gita Liepa";
    account = 15000;
    gadi1 = 0.01;
    gadi2 = 0.02;
    gadi3 = 0.03;
    gadi4 = 0.04;
    gadi5 = 0.05;

    x1 = ( account * gadi1 ) * 1;
    x2 = ( account * gadi2 ) * 2;
    x3 = ( account * gadi3 ) * 3;
    x4 = ( account * gadi4 ) * 4;
    x5 = ( account * gadi5 ) * 5;

    //** 2.papilduzdevums: pamatsummas pieaugums

    x1g = ( account * gadi5 ) + account;
    x2g = ( x1g * gadi5 ) + x1g;
    x3g = ( x2g * gadi5 ) + x2g;
    x4g = ( x3g * gadi5 ) + x3g;
    x5g = ( x4g * gadi5 ) + x4g - account;

    //** 1.papilduzdevums: attēlot summas ar diviem simboliem aiz punkta 
    num = x5g;
    roundedString = num.toFixed(2);
    rounded = Number(roundedString);
    

    document.getElementById("banka").innerHTML = 'Cienījamā, ' + userName;
    document.getElementById("piedavajums").innerHTML = 'Mēs redzam ka, Jūsu, kontā ir ' + account + ' EUR. Uz tā pamata vēlamies, Jums, piedāvāt nogūldīt šo summu mūsu nogūldijuma kontā uz kādu no zemāk norādītajiem termiņiem.';
    document.getElementById("ieguvums1").innerHTML = '- uz vienu gadu, ar jūsu ieguvumu ' + x1 + ' EUR';
    document.getElementById("ieguvums2").innerHTML = '- uz diviem gadiem, ar jūsu ieguvumu ' + x2 + ' EUR';
    document.getElementById("ieguvums3").innerHTML = '- uz trim gadiem, ar jūsu ieguvumu ' + x3 + ' EUR';
    document.getElementById("ieguvums4").innerHTML = '- uz četriem gadiem, ar jūsu ieguvumu ' + x4 + ' EUR';
    document.getElementById("ieguvums5").innerHTML = '- uz pieciem gadiem, ar jūsu ieguvumu ' + x5 + ' EUR'+ ". Ja vēlēsieties saņemt procentus pie pamat summas, termiņā beigās, jūsu kopējais ieguvums būs " + rounded + " EUR ";
    document.getElementById("thnx").innerHTML = 'Ceram uz sadarbību, ' + userName;



     //** 4. uzdevums pāreja no diskrētiem mainīgajiem uz masīvu 

    const gadi = ["1", "2", "3", "4", "5"];
    const bUser = [ "Andris Lielais", "15000"];
    
    var procenti;
    var reuzltats;
    i = 1
    for ( let i = 1; i < 6; i++) {
        procenti=i/1; 
        rezultats=(bUser[1]*procenti)/100; 

        document.getElementById('piedavajums2').innerHTML=document.getElementById('piedavajums2').innerHTML + 'Ja jūs iegulīsiest to mūsu bankā uz '+i+' gadu, , tad pec gada Jūs saņemsiet '+rezultats+' EUR.<br>';
    }  
    
    
    document.getElementById("klients").innerHTML = 'Cienijamais,' + bUser[0];

    document.getElementById("thnx2").innerHTML = 'Ceram uz sadarbību, ' + bUser[0];