package com.emitekllc.backend.repository;

import com.emitekllc.backend.model.Favorito;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoritoRepository extends JpaRepository<Favorito, Long> {

    List<Favorito> findByUsuario(Long id);
}
