'use client';
import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {items} from "@/data/items";
import {Item} from "@/components/Item";
import {TItem} from "@/types/types";
import clsx from "clsx";

export const ReactDndArea = () => {
  return (
    <div>
      <div className={'mb-4'}>
        <h1 className={'font-bold text-lg'}>react-dnd area</h1>
      </div>
      <DndProvider backend={HTML5Backend}>
        <DropArea/>
        {
          items.map((item, index) => {
            return (
              <DragArea key={index} item={item}></DragArea>
            )
          })
        }
      </DndProvider>
    </div>
  )
};

const DropArea = () => {
  const [{isOver}, ref] = useDrop<TItem,unknown,{isOver: boolean}>({
    accept: 'item',
    drop: (item, monitor) => {
      alert(item.name)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  return (
    <div ref={ref} className={clsx('p-4', isOver ? 'bg-gray-600' : 'bg-gray-400')}>
      <span className={'font-bold font-mono'}>
        DROP HERE
      </span>
    </div>
  )
}

const DragArea = ({item}: { item: TItem }) => {
  const [collect, ref] = useDrag({
    type: 'item',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    item: item
  })

  return (
    <div ref={ref} className={collect.isDragging ? 'opacity-50' : ''}>
      <Item name={item.name}></Item>
    </div>
  )
}
