import Swal from 'sweetalert2';

const Alert = ({ title, content, icon }: any) => {
    const showAlert = () => {
        Swal.fire({
            icon,
            title,
            text: content,
        });
    };

    return (
        <button onClick={showAlert}>
            Show Alert
        </button>
    );
};

export default Alert;
