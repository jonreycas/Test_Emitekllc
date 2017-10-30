package com.emitekllc.backend.repository;

import com.emitekllc.backend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByCuenta(String cuenta);
}
