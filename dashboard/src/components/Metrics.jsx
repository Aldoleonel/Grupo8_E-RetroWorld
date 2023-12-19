import { MetricItem } from "./MetricItem";

export const Metrics = () => {

    const items = [
        {
            id: crypto.randomUUID(),
            color : "primary",
            title : "Products in Data Base",
            value: 21,
            icon: "fa-film"
        },
        {
            id: crypto.randomUUID(),
            color : "success",
            title : "Total awards",
            value: 71,
            icon: "fa-award"
        },
        {
            id: crypto.randomUUID(),
            color : "warning",
            title : "Actors quantity",
            value: 49,
            icon: "fa-user"
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
