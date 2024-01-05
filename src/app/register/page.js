import Image from "next/image"

export default function RegisterPage() {
    return (
        <section className="mt-4">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={''} width={32} height={32}/>
                    Login with google
                </button>
            </form>
        </section>
    )
}