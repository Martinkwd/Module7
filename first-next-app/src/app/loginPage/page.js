import Link from "next/link";

export default function loginPage() {
  return (
    <div className="login">
      <h1>login</h1>
      <p>
        This is the login page <Link href="/">home</Link>.
      </p>
    </div>
  );
}
