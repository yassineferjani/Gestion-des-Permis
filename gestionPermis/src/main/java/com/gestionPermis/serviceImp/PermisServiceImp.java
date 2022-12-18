package com.gestionPermis.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.exceptions.PermisNotFoundException;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.PermisService;
@Service
public class PermisServiceImp implements PermisService {
	
	@Autowired
	private PermisRepository permisRepository;
	
	@Override
	public List<Permis> listPermis() {
		return permisRepository.findAll();
	}

	@Override
	public Permis getPermis(Long id) {
		return permisRepository.findById(id).orElseThrow(()-> new PermisNotFoundException());
	}

	@Override
	public void addPermis(Permis permis) {
		permisRepository.save(permis);
		/*
		Conducteur conducteur = conducteurRepository.findById(permis.getConducteur().getId()).
				orElseThrow(()->new ConducteurNotFoundException());
		if (conducteur != null){
			conducteur.setPermis(Stream.of(permis).collect(Collectors.toList()));
			conducteurRepository.save(conducteur);
		}*/
	}

	@Override
	public void updatePermis(Permis permis) {
		permisRepository.save(permis);
	}

	@Override
	public void deletePermis(Long id) {
		permisRepository.deleteById(id);
	}

}
