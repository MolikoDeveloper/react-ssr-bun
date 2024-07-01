

export interface Item {
    Name: string,
    href: string
}

export default function (props: { items: Item[] }) {


    return (
        <div>
            {props.items.map((item,index) => {

                return (
                    <div key={index} className="pos- bg-red-950 text-red-50">
                        <a href={item.href}>{item.Name}</a>
                    </div>
                )
            })}
        </div>
    )
} 