/*

This is a demo for adding a script file to a page on another domain
and executing code back to an api to then output the result on to
the page that loaded the script.

*/

(function () {
    const postcodeElement = document.getElementById( `postcode` );
    const returnValueElement = document.getElementById( `returnValue` );

    if (typeof ( postcodeElement ) !== `undefined`) {
        postcodeElement.addEventListener( "focusout", ( event ) => {
            getApiResponse ( { postcode: event.target.value, returnValueElement } );
        });
    }
})();

const getApiResponse = ( { postcode, returnValueElement } ) => {
    const bodyFormatted = JSON.stringify( { postcode } );
    console.log(bodyFormatted);
    fetch(
        'https://html-javascript-data-flow-website.vercel.app/api/demo',
        {
            method: "POST",
            headers: new Headers({'content-type': 'text/plain'}),
            body: bodyFormatted,
        }
    )
        .then( ( response ) => response.json() )
        .then( ( json ) => {
            console.log( json );
            returnValueElement.innerHTML = JSON.stringify(json, null, 4);
        });
}
