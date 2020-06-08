export function getAuthFrom() {
    return `
        <form class="mui-form" id="auth-form">
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="email" id="email" >
                    <label for="email">Email</label>
                </div>
                <div class="mui-textfield mui-textfield--float-label">
                    <input type="password" id="password" >
                    <label for="password">Password</label>
                </div>
                <button  type="submit" class="mui-btn mui-btn--raised mui-btn--primary"
                        >Login</button>
            </form>
    `
}

export function authWithEmailAndpassword(email, password) {
    const apiKey = 'AIzaSyCL3dgkM9IZigFb8IZyHOqA_Qzy5wMGzUg'
 return fetch(`tps://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
     method: 'POST',
     body: JSON.stringify({email, password, returnSecureToken: true}),
     headers: {
         'Content-Type': 'application/json' }
 })
     .then(response => response.json())
     .then(data => data.idToken)
}
