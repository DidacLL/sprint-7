import React from 'react';

export const LicenseBar = () => <div
    style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        maxHeight: "2%"
    }}>
    <h6><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img alt="Licencia de Creative Commons"
             style={{borderWidth: 0, margin: " 0 1em 0 1em"}}
             src="https://i.creativecommons.org/l/by/4.0/80x15.png"/></a>
        Esta pagina está bajo una <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">licencia de
            Creative Commons Reconocimiento 4.0 Internacional</a>.</h6>
    <h6 style={{textAlign: "right", paddingRight: "10em", maxWidth: "40%"}}>Developed by Didac Llorens</h6>
</div>;