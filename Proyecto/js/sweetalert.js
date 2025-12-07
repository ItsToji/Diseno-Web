const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', (event) => {
                    event.preventDefault();
                    const email = form.email.value.trim();
                    const name = form.name.value.trim();
                    const message = form.message.value.trim();

                    if (!email || !name || !message) {
                        Swal.fire({
                            title: 'Faltan datos',
                            text: 'Por favor completa todos los campos antes de enviar.',
                            icon: 'warning',
                            confirmButtonText: 'Entendido'
                        });
                        return;
                    }

                    Swal.fire({
                        title: 'Mensaje enviado',
                        text: 'Gracias por contactarnos. Te responderemos pronto.',
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                    form.reset();
                });
            }