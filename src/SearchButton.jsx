import {Button} from"@/components/ui/button";

export function SearchButton({onclick}){
    return(
        <Button
          size="lg"
          on click={onclick}
          className="bg-secondary hover:bg-secondary-hover text-white"
        >
            Buscar
        </Button>
    );
}
