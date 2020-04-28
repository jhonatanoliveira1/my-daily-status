// request <> response
import auth0 from '../../lib/auth0'

const login = async (request, response) => {
    await auth0.handleLogin(request, response)
}
// autenticação: multi factor auth
// autorização
export default login