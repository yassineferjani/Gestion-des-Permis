package com.gestionPermis.services;

import java.util.List;

import com.gestionPermis.models.Contravention;


public interface ContraventionService {
	
	List<Contravention> listContravention();
	Contravention getContravention(Long id);
	void addContravention(Contravention c);
	void updateContravention(Contravention contravention);
	void deleteContravention (Long id);

}
