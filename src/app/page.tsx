import {ReactDndArea} from "@/components/ReactDndArea";
import {DndKitArea} from "@/components/DndKitArea";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ReactDndArea></ReactDndArea>
      </div>
      <div className="mt-4">
        <DndKitArea></DndKitArea>
      </div>
    </main>
  )
}
