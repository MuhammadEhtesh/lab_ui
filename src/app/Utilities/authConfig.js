import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_Signup_react",
        resetPassword: "B2C_1_reset",
        forgotPassword: "B2C_1_reset"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://propertytechnologysolutions.b2clogin.com/propertytechnologysolutions.onmicrosoft.com/B2C_1_Signup_react",
            forgotPassword: "https://propertytechnologysolutions.b2clogin.com/propertytechnologysolutions.onmicrosoft.com/B2C_1_reset",
            resetPassword: "https://propertytechnologysolutions.b2clogin.com/propertytechnologysolutions.onmicrosoft.com/B2C_1_reset"
        }
    },
    authorityDomain: "propertytechnologysolutions.b2clogin.com"
}

export const msalConfig = {
    auth: {
        clientId: "febb65f3-3844-472c-b000-6a8ec8bd9c33", 
        authority: b2cPolicies.authorities.signUpSignIn.authority, 
        knownAuthorities: [b2cPolicies.authorityDomain], 
        redirectUri: "https://localhost:3000",
        postLogoutRedirectUri: "https://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

export const loginRequest = {
    scopes: ['openid profile']
};