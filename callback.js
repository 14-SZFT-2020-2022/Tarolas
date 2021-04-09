'use strict';

// ---------------------------------------------------------------------------------
// ISMERKEDÉS A CALLBACK FOGALMÁVAL!
//
// function kiertekeles(igen, nem) {
//     let ertek = window.confirm('Éhes vagy-e?');
//     if (ertek) {
//         igen();
//     } else {
//         nem();
//     }
// }

// Első lehetőség callback-függvények hívásásra.
// kiertekeles(igenEseten, nemEseten);

// function igenEseten() {
//     console.log('Menj el kajálni!');
// }

// function nemEseten() {
//     console.log('Menj haza!');
// }

// Második lehetőség callback-függvények hívásásra.
// kiertekeles(
//     // Ezek anonim függvények, nincs azonosítójuk.
//     function () { console.log('Menj el kajálni! '); },
//     function () { console.log('Menj haza!'); }
// );

// kiertekeles(
//     () => console.log('Menj el kajálni!'),
//     () => console.log('Menj haza!')
// );
// -----------------------------------------------------------------------------------
// Callback doom
// let tomb = [1, 2];

// function meghiv(callback) {
//     setTimeout(callback, 2000);
// }

// meghiv(() => {
//     console.log('Feltöltöm a tömböt!');
//     tomb.push(3);
//     tombKiir();
//     meghiv(() => { 
//         console.log('Feltöltöm a tömböt!');
//         tomb.push(4);
//         tombKiir();
//         meghiv(() => { 
//             console.log('Feltöltöm a tömböt!');
//             tomb.push(5);
//             tombKiir();
//         });
//     });
// });

// function tombKiir() {
//     tomb.forEach(item => {
//         console.log(item);
//     });
// }

// tombKiir();
// --------------------------------------------------------------------------------------

function szkriptBetoltes(forras, callback) {
    let szkript = document.createElement('script');
    szkript.src = forras;
    document.body.append(szkript);

    szkript.onload = () => callback(null, forras);
    szkript.onerror = () => callback(new Error(`Nem találom ezt az állományt: `), szkript);
}

szkriptBetoltes('./elso.js', (error, elem) => {
    if (error) {
        console.log(error.message + ' ' + elem.src);
    } else {
        console.log(`Az állomány neve: ${elem}`)
        elsoFuggveny();
        szkriptBetoltes('./masodik.js', (error, elem) => {
            if (error) {
                console.log(error.message + ' ' + elem.src);
            } else {
                console.log(`Az állomány neve: ${elem}`)
                masodikFuggveny();
            }
        });
    }
});

