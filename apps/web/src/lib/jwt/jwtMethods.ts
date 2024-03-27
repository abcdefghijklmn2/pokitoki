import { jwtVerify, SignJWT } from 'jose'

const jwtMethods = {
  async encode({ token, secret, maxAge }: { secret?: string; token?: any; maxAge?: number }) {
    try {
      const secretValue = new TextEncoder().encode(secret ?? process.env.AUTH_SECRET)
      // `jsonwebtoken`의 `sign` 메소드를 사용하여 토큰 인코딩

      // @ts-ignore
      if (token?.exp) delete token.exp
      const encodedToken = new SignJWT(token)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secretValue)

      return encodedToken
    } catch (error) {
      console.error('Error encoding token:', error)
      throw error
    }
  },
  async decode({ token, secret }: { secret?: string; token?: any }) {
    try {
      const secretValue = new TextEncoder().encode(secret ?? process.env.AUTH_SECRET)
      const decoded = await jwtVerify(token!, secretValue!)

      console.log('decoded!', decoded)
      return decoded
    } catch (error) {
      console.error('Error decoding token:', error)
      // 디코딩 실패 시 null 반환
      return null
    }
  },
}

export default jwtMethods
