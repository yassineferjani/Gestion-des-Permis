package com.gestionPermis.serviceImp;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestionPermis.dao.ConducteurRepository;
import com.gestionPermis.dao.ContraventionRepository;
import com.gestionPermis.dao.PermisRepository;
import com.gestionPermis.exceptions.ConducteurNotFoundException;
import com.gestionPermis.models.Conducteur;
import com.gestionPermis.models.Contravention;
import com.gestionPermis.models.Permis;
import com.gestionPermis.services.ConducteurService;
@Service
public class ConducteurServiceImp implements ConducteurService {
	
	@Autowired
	private ConducteurRepository conducteurRepository;
	@Autowired
	private PermisRepository permisRepository;
	@Autowired
	private ContraventionRepository contraventionRepository;
	
	@Override
	public List<Conducteur> listConducteurs() {
		return conducteurRepository.findAll();
	}

	@Override
	public Conducteur getConducteur(Long id) {
		return conducteurRepository.findById(id).orElseThrow(()-> new ConducteurNotFoundException());
	}

	@Override
	public void addConducteur(Conducteur conducteur) {
		conducteurRepository.save(conducteur);
		
	}

	@Override
	public void updateConducteur(Conducteur conducteur) {
		conducteurRepository.save(conducteur);
		
	}

	@Override
	public void deleteConducteur(Long id) {
		conducteurRepository.deleteById(id);
		
	}
	

}
