import { MetricItem } from "./MetricItem";

export const Metrics = () => {

    const items = [
        {
            id: crypto.randomUUID(),
            color : "primary",
            title : "Products in Data Base",
            value: 21,
            icon: "fa-solid fa-gamepad"
         }
        ,
        {
            id: crypto.randomUUID(),
            color : "success",
            title : "Users",
            value: 10,
            icon: "fa-user"
        },
        {
            id: crypto.randomUUID(),
            color : "warning",
            title : "Categories",
            value: 4,
            icon: "fa-solid fa-list"
        }
    ] 

  return (
    <div className="row">
            {items.map(({id, title, value, color, icon}) => (
                <MetricItem key={id} title={title} value = {value} color = {color} icon={icon} />
            ))}
      
    </div>
  );
};
