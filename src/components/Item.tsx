import Link from "next/link";

type Props = {
  name: string
}

export const Item = ({name}: Props) => {
  return (
    <Link href={'/after'} className={'p-4 cursor-pointer flex justify-center items-center'}>
      <span>
        {name}
      </span>
    </Link>
  )
};
