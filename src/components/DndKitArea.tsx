'use client';
import {items} from "@/data/items";
import {Item} from "@/components/Item";
import {TItem} from "@/types/types";
import {DndContext, useDraggable, useDroppable} from "@dnd-kit/core";
import clsx from "clsx";
import {CSSProperties} from "react";

export const DndKitArea = () => {
  return (
    <div>
      <div className={'mb-4'}>
        <h1 className={'font-bold text-lg'}>dnd-kit area</h1>
      </div>
      <DndContext>
        <DropArea/>
        {
          items.map((item, index) => {
            return (
              <DragArea key={index} item={item}></DragArea>
            )
          })
        }
      </DndContext>
    </div>
  )
};

const DropArea = () => {
  const {setNodeRef, isOver} = useDroppable({
    id: 'dnd-kit',
  })

  return (
    <div ref={setNodeRef} className={clsx('p-4', isOver ? 'bg-gray-600' : 'bg-gray-400')}>
      <span className={'font-bold font-mono'}>
        DROP HERE
      </span>
    </div>
  )
}

const DragArea = ({item}: { item: TItem }) => {
  const {setNodeRef, isDragging, listeners, transform, attributes } = useDraggable({
    id: item.name,
  })

  const style: CSSProperties = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  }

  return (
    <div ref={setNodeRef} {...listeners} style={style} {...attributes} className={isDragging ? 'opacity-50' : ''}>
      <Item name={item.name}></Item>
    </div>
  )
}
