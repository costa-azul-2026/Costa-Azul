import { Link } from "react-router-dom";
import "./Breadcrumb.css";

   {/* Primeira tipo para que o breadcrumb funcione, ele recebe o label e se tem ou não navegação */}
    type BreadcrumbItem = {
        label: string;
        to?: string;
      }

      {/* Herda o item la, na verdade ele recebe esses itens, meio que define a estrutura do breadcrumb */}

      type BreadcrumbProps = {
        items: BreadcrumbItem[];
    }

    {/*Aqui é o componente e pegue a propriedade items */}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return(
        <> 
        {/* Tag de navegação do breadcrumb */}

    <nav className="breadcrumb" aria-label="breadcrumb"> 

    {/* Aqui ele mapeia os items recebidos e cria o breadcrumb, se tiver o to ele cria um link, se não ele cria um span com o label */}
      {items.map((item, index) => ( 
        <span key={item.label} className="breadcrumb__item">
        
        {item.to ? (
            <Link to={item.to} className="breadcrumb__link">
                {item.label}
            </Link>
        ) : (
            <span className="breadcrumb__current">
                {item.label}
            </span>
        )}

        {/* Aqui ele cria o separador do breadcrumb, se não for o último item ele cria o separador, se for o último ele não cria */}

        {index < items.length - 1 && (
            <span className="breadcrumb__separator">
                ›
            </span>
        )}
        </span>
     
    ))}
    </nav>
    </>
     
    )}