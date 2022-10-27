export default function(){
  return (
    <main className="p-10 bg-primary-opq text-neutral-50 bg-react bg-no-repeat bg-right">
      <h1 className="text-4xl font-bold">Fun facts about React</h1>
      <ul className="text-base marker:text-2xl marker:text-accent flex flex-col gap-2 m-6 list-disc ml-6 text-neutral-200">
        <li><p>Was first released in 2013</p></li>
        <li><p>Was originally created by Jordan Walke</p></li>
        <li><p>Has well over 100K stars on GitHub</p></li>
        <li><p>Is maintained by Facebook</p></li>
        <li><p>Powers thousands of enterprise apps, including mobile apps</p></li>
      </ul>
    </main>
  )
}