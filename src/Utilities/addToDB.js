import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';


const MySwal = withReactContent(Swal)


const  getStoredLawyer = () =>{

    const storedLawyerSTR = localStorage.getItem("LawyerList");
    if (storedLawyerSTR) {
        const storedlawyerData = JSON.parse(storedLawyerSTR);
        return storedlawyerData;
    }
    else{
        return [];
    }

}

const addToStoredDB = (id)=>{

    const storedlawyerData = getStoredLawyer();
    if (storedlawyerData.includes(id)) {
        Swal.fire({
            title: "<strong>You Already Added this Lawyer<u></u></strong>",
            icon: "info",
            html: `
          
            `,
            showCloseButton: true,
    
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Click to Continue
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
           
          });
    }
    else{
        storedlawyerData.push(id);
        const data = JSON.stringify(storedlawyerData);
        // console.log(data)
        localStorage.setItem("LawyerList",data);
    }

}

export{addToStoredDB,getStoredLawyer};